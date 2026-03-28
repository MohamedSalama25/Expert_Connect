import { Router } from 'express';
import { MessagesController } from './messages.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

const router = Router();

router.use(authMiddleware);

router.post('/', MessagesController.sendMessage);
router.get('/conversations', MessagesController.getConversations);

export default router;
