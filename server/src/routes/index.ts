import express from 'express';
import restaurantRoutes from './restaurant';

const router = express.Router();

router.use('/api/restaurant', restaurantRoutes);

export default router;
