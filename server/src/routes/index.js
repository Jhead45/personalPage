import { Router } from 'express';
import jobRouter from './jobs';
import contactRouter from './contactform';
import stripeChargeRouter from './stripeCharge';

let router = Router();



router.use('/jobs', jobRouter);
router.use('/donate', stripeChargeRouter);
router.use('/contact', contactRouter);

export default router;