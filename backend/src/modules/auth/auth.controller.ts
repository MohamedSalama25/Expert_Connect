import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service.js';
import { verifyRefreshToken, generateAccessToken } from '../../utils/jwt.js';
import prisma from '../../config/prisma.js';
import { comparePasswords } from '../../utils/hashing.js';

export class AuthController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await AuthService.register(req.body);
            res.status(201).json({
                status: 'success',
                message: 'User registered successfully',
                data: { user },
            });
        } catch (error) {
            next(error);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await AuthService.login(req.body);

            // Store Refresh Token in HTTP-only Cookie
            res.cookie('refreshToken', result.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            res.status(200).json({
                status: 'success',
                message: 'Logged in successfully',
                data: {
                    user: result.user,
                    accessToken: result.accessToken,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.cookies.refreshToken;
            if (refreshToken) {
                // Find and delete the hashed token
                const tokens = await prisma.refreshToken.findMany();
                for (const t of tokens) {
                    if (await comparePasswords(refreshToken, t.token)) {
                        await prisma.refreshToken.delete({ where: { id: t.id } });
                        break;
                    }
                }
            }

            res.clearCookie('refreshToken');
            res.status(200).json({
                status: 'success',
                message: 'Logged out successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    static async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ message: 'No refresh token provided' });
            }

            const payload = verifyRefreshToken(refreshToken);

            // Verify token exists in DB (comparing hashed tokens)
            const userTokens = await prisma.refreshToken.findMany({
                where: { userId: payload.userId },
            });

            let isValid = false;
            for (const t of userTokens) {
                if (await comparePasswords(refreshToken, t.token)) {
                    isValid = true;
                    // Check if expired
                    if (new Date() > t.expiresAt) {
                        await prisma.refreshToken.delete({ where: { id: t.id } });
                        isValid = false;
                    }
                    break;
                }
            }

            if (!isValid) {
                return res.status(401).json({ message: 'Invalid or expired refresh token' });
            }

            const newAccessToken = generateAccessToken({ userId: payload.userId, role: payload.role });

            res.status(200).json({
                status: 'success',
                data: { accessToken: newAccessToken },
            });
        } catch (error) {
            next(error);
        }
    }
}
