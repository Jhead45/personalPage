import { Router } from 'express';
import jobRouter from './jobs';

let router = Router();



router.use('/jobs', jobRouter);

export default router;