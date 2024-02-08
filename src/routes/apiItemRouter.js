import express from 'express';
import { Item } from '../../db/models';

const router = express.Router();

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      await Item.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
    }
  });

router.post('/', async (req, res) => {
  console.log('222222222req', req.body, '222222222req');
  const {
    title, img, address, price, sale,
  } = req.body;
  const item = await Item.create({
    title,
    img,
    address,
    price,
    sale,
  });
  res.status(201).json(item);
});

export default router;
