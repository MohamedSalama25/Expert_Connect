import { Router } from 'express';
import { BookingsController } from './bookings.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';
import { roleMiddleware } from '../../middleware/role.middleware.js';
import { Role } from '@prisma/client';

const router = Router();

router.use(authMiddleware);

router.get('/me', BookingsController.getMyBookings);
router.post('/', roleMiddleware([Role.CLIENT]), BookingsController.createBooking);
router.post('/slots', roleMiddleware([Role.EXPERT]), BookingsController.createSlots);
router.patch('/:id/status', BookingsController.updateStatus);

export default router;
