import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// --- Client-side Axios ---
export const clientAxios: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Request Interceptor: Attach access token from Cookies
clientAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = Cookies.get('accessToken');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle errors, refreshes, etc.
clientAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If error is 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Try to refresh token
                const response = await axios.post(`${baseURL}/auth/refresh`, {}, { withCredentials: true });
                const { accessToken } = response.data.data;

                Cookies.set('accessToken', accessToken);
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                return clientAxios(originalRequest);
            } catch (refreshError) {
                // If refresh fails, clear token and redirect (optional, or handle in store)
                Cookies.remove('accessToken');
                // window.location.href = '/login'; 
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// --- Server-side Axios ---
// Use this inside Server Components/Actions
export const getServerAxios = async (): Promise<AxiosInstance> => {
    // We only import headers when called on server
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;

    const serverAxiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        withCredentials: true,
    });

    return serverAxiosInstance;
};
