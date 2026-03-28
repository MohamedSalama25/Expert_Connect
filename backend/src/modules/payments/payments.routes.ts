import { Router } from 'express';
import { PaymentsController } from './payments.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

const router = Router();

router.post('/create-intent', authMiddleware, PaymentsController.createIntent);
router.post('/webhook', PaymentsController.webhook);

export default router;
