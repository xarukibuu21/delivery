import express from 'express';
import { Item } from '../../db/models';

const router = express.Router();

router
  .get('/', async (req, res) => {
    // const userId = req.params.id;
    try {
      const items = await Item.findAll();
      // {
      //   where: {
      //     userId: res.locals.user.id,
      //   },
      // }
      console.log('111111', req.params.id, '1111111');
      const initState = { items };
      res.render('ItemPage', initState);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

export default router;
