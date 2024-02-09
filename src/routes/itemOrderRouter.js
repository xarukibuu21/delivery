import express from 'express';
import { Order } from '../../db/models';

const router = express.Router();

router.get('/orderitem', async (req, res) => {
  const ordersItems = await Order.findAll();
  const initStateOrder = { ordersItems };
  res.render('ItemOrderPage', initStateOrder);
});

export default router;
