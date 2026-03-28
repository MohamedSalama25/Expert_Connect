import { clientAxios } from '@/lib/axios';
import {
    LoginFormValues,
    RegisterFormValues,
    LoginResponse,
    RegisterResponse
} from '../Types';

export const authService = {
    login: async (credentials: LoginFormValues): Promise<LoginResponse> => {
        const { data } = await clientAxios.post<LoginResponse>('/auth/login', credentials);
        return data;
    },

    register: async (userData: RegisterFormValues): Promise<RegisterResponse> => {
        const { data } = await clientAxios.post<RegisterResponse>('/auth/register', userData);
        return data;
    },

    logout: async (): Promise<void> => {
        await clientAxios.post('/auth/logout');
    },

    refresh: async (): Promise<{ accessToken: string }> => {
        const { data } = await clientAxios.post('/auth/refresh');
        return data.data;
    }
};
