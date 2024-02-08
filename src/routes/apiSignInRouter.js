import express from 'express';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

const apiSignInRouter = express.Router();

apiSignInRouter.get('/signin', (req, res) => {
  res.render('SignInPage');
});

apiSignInRouter.post('/signin', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name, password } });
    if (user) {
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        address: user.address,
      };

      const { accessToken, refreshToken } = generateTokens({ user: userData });
      res
        .cookie('accessToken', accessToken, cookiesConfig.access)
        .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
        .json({ user: userData });
    } else {
      res.status(401).send('Имя пользователя или пароль неверны');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

export default apiSignInRouter;
