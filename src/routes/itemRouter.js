import express from 'express';
import { Item } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll();
    const initState = { items };
    res.render('ItemPage', initState);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
