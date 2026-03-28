import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/prisma.js';
import { AppError } from '../../middleware/error.middleware.js';

export class BookingsController {
    static async createSlots(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const expertId = req.user.userId;
            const { slots } = req.body; // Array of { startTime, endTime }

            const createdSlots = await prisma.bookingSlot.createMany({
                data: slots.map((s: any) => ({
                    expertId,
                    startTime: new Date(s.startTime),
                    endTime: new Date(s.endTime),
                })),
            });

            res.status(201).json({ status: 'success', data: { count: createdSlots.count } });
        } catch (error) {
            next(error);
        }
    }

    static async createBooking(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const clientId = req.user.userId;
            const { slotId } = req.body;

            const slot = await prisma.bookingSlot.findUnique({
                where: { id: slotId },
            });

            if (!slot) throw new AppError('Slot not found', 404);
            if (slot.isBooked) throw new AppError('Slot already booked', 400);

            // Recursive transaction to ensure atomic booking
            const booking = await prisma.$transaction(async (tx) => {
                // Double check within transaction
                const currentSlot = await tx.bookingSlot.findUnique({
                    where: { id: slotId },
                });

                if (currentSlot?.isBooked) throw new AppError('Slot already booked', 400);

                // Mark slot as booked
                await tx.bookingSlot.update({
                    where: { id: slotId },
                    data: { isBooked: true },
                });

                // Get expert profile to get hourly rate (simplified)
                const expert = await tx.expertProfile.findUnique({
                    where: { userId: slot.expertId },
                });

                // Create booking
                return tx.booking.create({
                    data: {
                        clientId,
                        expertId: slot.expertId,
                        slotId,
                        totalPrice: expert?.hourlyRate || 0,
                        status: 'PENDING',
                    },
                });
            });

            res.status(201).json({ status: 'success', data: { booking } });
        } catch (error) {
            next(error);
        }
    }

    static async getMyBookings(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { userId, role } = req.user;

            const bookings = await prisma.booking.findMany({
                where: role === 'CLIENT' ? { clientId: userId } : { expertId: userId },
                include: {
                    client: { select: { name: true, image: true } },
                    expert: { select: { name: true, image: true } },
                    slot: true,
                },
            });

            res.status(200).json({ status: 'success', data: { bookings } });
        } catch (error) {
            next(error);
        }
    }

    static async updateStatus(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const booking = await prisma.booking.update({
                where: { id: id as string },
                data: { status },
            });

            res.status(200).json({ status: 'success', data: { booking } });
        } catch (error) {
            next(error);
        }
    }
}
