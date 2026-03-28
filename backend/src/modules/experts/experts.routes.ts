import { Router } from 'express';
import { ExpertsController } from './experts.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';
import { roleMiddleware } from '../../middleware/role.middleware.js';
import { Role } from '@prisma/client';

const router = Router();

router.get('/', ExpertsController.getAll);
router.get('/:id', ExpertsController.getById);

// Expert only routes
router.put('/profile', authMiddleware, roleMiddleware([Role.EXPERT]), ExpertsController.updateProfile);

export default router;
