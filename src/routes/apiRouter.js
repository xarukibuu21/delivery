import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});




router.patch('/order/:id', async (req, res) => {
  try {
    const { address } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    await user.update({ address });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
