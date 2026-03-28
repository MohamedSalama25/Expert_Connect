import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/prisma.js';

export class PaymentsController {
    static async createIntent(req: Request, res: Response, next: NextFunction) {
        try {
            const { bookingId } = req.body;

            // Mocking payment intent creation (e.g., Stripe)
            const booking = await prisma.booking.findUnique({
                where: { id: bookingId },
                include: { slot: true },
            });

            if (!booking) {
                return res.status(404).json({ message: 'Booking not found' });
            }

            // Create a payment record
            const payment = await prisma.payment.create({
                data: {
                    bookingId,
                    amount: booking.totalPrice,
                    status: 'pending',
                    provider: 'stripe',
                    transactionId: 'pi_mock_' + Math.random().toString(36).substring(7),
                },
            });

            res.status(200).json({
                status: 'success',
                data: {
                    clientSecret: 'mock_secret_' + payment.transactionId,
                    payment,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async webhook(req: Request, res: Response, next: NextFunction) {
        try {
            // Mocking Stripe webhook
            const { transactionId, status } = req.body;

            const payment = await prisma.payment.update({
                where: { transactionId: transactionId as string },
                data: { status },
            });

            if (status === 'succeeded') {
                await prisma.booking.update({
                    where: { id: payment.bookingId },
                    data: { status: 'CONFIRMED' },
                });
            }

            res.status(200).send({ received: true });
        } catch (error) {
            next(error);
        }
    }
}
