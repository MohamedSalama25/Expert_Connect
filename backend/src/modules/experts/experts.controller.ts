import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/prisma.js';
import { AppError } from '../../middleware/error.middleware.js';

export class ExpertsController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { category, search } = req.query;

            const experts = await prisma.expertProfile.findMany({
                where: {
                    isVerified: true,
                    ...(category && {
                        categories: { some: { category: { name: category as string } } },
                    }),
                    ...(search && {
                        user: { name: { contains: search as string, mode: 'insensitive' } },
                    }),
                },
                include: {
                    user: { select: { name: true, image: true } },
                    categories: { include: { category: true } },
                },
            });

            res.status(200).json({ status: 'success', data: { experts } });
        } catch (error) {
            next(error);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const expert = await prisma.expertProfile.findUnique({
                where: { userId: req.params.id as string },
                include: {
                    user: { select: { name: true, image: true, email: true } },
                    categories: { include: { category: true } },
                    availability: true,
                    bookingSlots: { where: { isBooked: false, startTime: { gt: new Date() } } },
                },
            });

            if (!expert) {
                throw new AppError('Expert profile not found', 404);
            }

            res.status(200).json({ status: 'success', data: { expert } });
        } catch (error) {
            next(error);
        }
    }

    static async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const userId = req.user.userId;

            const updatedProfile = await prisma.expertProfile.upsert({
                where: { userId },
                update: req.body,
                create: {
                    ...req.body,
                    userId,
                },
            });

            res.status(200).json({ status: 'success', data: { profile: updatedProfile } });
        } catch (error) {
            next(error);
        }
    }
}
