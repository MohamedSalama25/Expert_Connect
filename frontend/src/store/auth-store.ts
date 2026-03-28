import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { User } from '@/features/auth/Types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    setAuth: (user: User, accessToken: string) => void;
    logout: () => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            setAuth: (user, accessToken) => {
                Cookies.set('accessToken', accessToken);
                set({ user, isAuthenticated: true });
            },

            logout: () => {
                Cookies.remove('accessToken');
                set({ user: null, isAuthenticated: false });
            },

            clearAuth: () => {
                Cookies.remove('accessToken');
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: 'auth-storage', // name of the item in storage (default: localStorage)
            storage: createJSONStorage(() => localStorage),
        }
    )
);
