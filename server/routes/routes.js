import { Router } from 'express';
import { ProductData } from '../controllers/products.js';

const appRouter = Router()
  .get('/items', ProductData.getProductList)
  .get('/items/:id', ProductData.getOneItem)
  .get('/items/:id/description', ProductData.getItemDescription);

const router = Router();

router.use('/api', appRouter);

export default router;
