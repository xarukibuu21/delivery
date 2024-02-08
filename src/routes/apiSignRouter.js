import express from 'express';
import { User } from '../../db/models';

const apiSignRouter = express.Router();

apiSignRouter.get('/signup', (req, res) => {
  res.render('SignUpPage');
});

apiSignRouter.post('/signup', async (req, res) => {
  try {
    const {
      name, email, password, phone, address, isDeliver,
    } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      phone,
      address,
      isDeliver,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

export default apiSignRouter;
