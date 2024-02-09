import express from 'express';
import { Item } from '../../db/models';
// import { where } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
  const items = await Item.findAll();
  const initState = { items };
  res.render('MainPage', initState);
});


export default router;
