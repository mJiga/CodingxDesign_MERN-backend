import { Router } from 'express';
import { Request, Response } from 'express';
import { handlePostBooking, handleDeleteBooking, handleGetBooking, handleGetBookings, handleUpdateBooking } from '../controllers/bookingsController';

const router = Router();

router.get('/', handleGetBookings);
router.get('/:id', handleGetBooking);
router.post('/', handlePostBooking);
router.put('/:id', handleUpdateBooking);
router.delete('/:id', handleDeleteBooking);

export { router };