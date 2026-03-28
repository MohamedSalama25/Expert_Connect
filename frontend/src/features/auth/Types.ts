import { ReactNode } from "react";
import { z } from "zod";

export interface AuthLayoutProps {
    children: ReactNode;
}

export type UserType = "client" | "expert";

// --- Form Schemas ---

export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    role: z.enum(["CLIENT", "EXPERT"]),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

// --- API Types ---

export interface User {
    id: string;
    email: string;
    name: string;
    role: "CLIENT" | "EXPERT";
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    status: "success" | "error";
    message?: string;
    data?: T;
}

export interface LoginResponseData {
    user: User;
    accessToken: string;
}

export interface RegisterResponseData {
    user: User;
}

export type LoginResponse = ApiResponse<LoginResponseData>;
export type RegisterResponse = ApiResponse<RegisterResponseData>;

export interface ApiError {
    status: "error";
    message: string;
}
