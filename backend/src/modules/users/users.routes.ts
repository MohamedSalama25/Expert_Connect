import { Router } from 'express';
import { UsersController } from './users.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/me', authMiddleware, UsersController.getMe);

export default router;
