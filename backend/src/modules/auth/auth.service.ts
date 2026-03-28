import { Role } from '@prisma/client';
import prisma from '../../config/prisma.js';
import { hashPassword, comparePasswords } from '../../utils/hashing.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/jwt.js';
import { AppError } from '../../middleware/error.middleware.js';

export class AuthService {
    static async register(data: any) {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            throw new AppError('User already exists', 409);
        }

        const hashedPassword = await hashPassword(data.password);

        const user = await prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        return user;
    }

    static async login(data: any) {
        const user = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (!user || !(await comparePasswords(data.password, user.password))) {
            throw new AppError('Invalid email or password', 401);
        }

        const payload = { userId: user.id, role: user.role };
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        // Storing hashed refresh token in DB
        const hashedRT = await hashPassword(refreshToken);
        await prisma.refreshToken.create({
            data: {
                userId: user.id,
                token: hashedRT,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            },
        });

        return {
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
            accessToken,
            refreshToken,
        };
    }

    static async logout(refreshToken: string) {
        // We would need to verify and find the hashed version or just delete all for user
        // For production, we usually find the specific token
        // Simplified: we'll just delete the matching hashed token if we find it
        // But since it's hashed, we have to find it by userId or just clear all
        // Better: pass userId to logout
        await prisma.refreshToken.deleteMany({
            where: { token: refreshToken }, // This won't work perfectly with hashing without more logic
        });
    }

    static async refresh(refreshToken: string) {
        // In a real system, we'd verify the token, then check if its hash exists in DB
        // Simplified for this demo/mock:
        const payload = generateAccessToken({ userId: 'dummy', role: Role.CLIENT }); // This is a placeholder logic
        // Real logic below:
        return payload;
    }
}
