import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/prisma.js';

export class UsersController {
    static async getMe(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const userId = req.user.userId;

            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    image: true,
                    isEmailVerified: true,
                    createdAt: true,
                    expertProfile: true,
                },
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ status: 'success', data: { user } });
        } catch (error) {
            next(error);
        }
    }
}
