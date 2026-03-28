import { Request, Response, NextFunction } from 'express';
import prisma from '../../config/prisma.js';

export class MessagesController {
    static async sendMessage(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const senderId = req.user.userId;
            const { conversationId, content } = req.body;

            const message = await prisma.message.create({
                data: {
                    conversationId,
                    senderId,
                    content,
                },
            });

            // Update conversation timestamp
            await prisma.conversation.update({
                where: { id: conversationId },
                data: { updatedAt: new Date() },
            });

            res.status(201).json({ status: 'success', data: { message } });
        } catch (error) {
            next(error);
        }
    }

    static async getConversations(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const userId = req.user.userId;

            const conversations = await prisma.conversation.findMany({
                where: {
                    users: { some: { id: userId } },
                },
                include: {
                    users: { select: { id: true, name: true, image: true } },
                    messages: {
                        orderBy: { createdAt: 'desc' },
                        take: 1,
                    },
                },
            });

            res.status(200).json({ status: 'success', data: { conversations } });
        } catch (error) {
            next(error);
        }
    }
}
