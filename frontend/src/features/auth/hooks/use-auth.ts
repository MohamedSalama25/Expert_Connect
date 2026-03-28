import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth-store';
import { authService } from '../services/auth-service';
import {
    LoginFormValues,
    RegisterFormValues,
    LoginResponse,
    RegisterResponse,
    ApiError
} from '../Types';
import { AxiosError } from 'axios';

export const useLogin = () => {
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation<LoginResponse, AxiosError<ApiError>, LoginFormValues>({
        mutationFn: authService.login,
        onSuccess: (response) => {
            if (response.data) {
                setAuth(response.data.user, response.data.accessToken);
            }
        },
    });
};

export const useRegister = () => {
    return useMutation<RegisterResponse, AxiosError<ApiError>, RegisterFormValues>({
        mutationFn: authService.register,
    });
};

export const useLogout = () => {
    const logout = useAuthStore((state) => state.logout);

    return useMutation({
        mutationFn: authService.logout,
        onSettled: () => {
            logout();
            window.location.href = '/login';
        },
    });
};
