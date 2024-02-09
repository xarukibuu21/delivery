import express from 'express';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

const apiSignRouter = express.Router();

apiSignRouter.get('/signup', (req, res) => {
  res.render('SignUpPage');
});

apiSignRouter.post('/signup', async (req, res) => {
  try {
    const {
      name, email, password, phone, address, isDeliver,
    } = req.body;
    console.log(req.body);

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

    const user = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      phone: newUser.phone,
      address: newUser.address,
    };

    const { accessToken, refreshToken } = generateTokens({ user });
    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

export default apiSignRouter;
