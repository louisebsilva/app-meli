import { Router } from 'express';
import { ProductData } from '../controllers/products.js';

const appRouter = Router().get('/items', ProductData.getProductList);

const router = Router();

router.use('/api', appRouter);

export default router;
