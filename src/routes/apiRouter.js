import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});
router.patch('/order', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
   
    // const user = User.findByPk
    // user.address = 'sadasdasd'
    // user.save()
    res.json(newAddress);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
export default router;
