import express from 'express';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';

const apiLoginRouter = express.Router();

apiLoginRouter.get('/signin', (req, res) => {
  res.render('SignInPage');
});

apiLoginRouter.post('/signin', async (req, res) => {
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
        .sendStatus(200);
    } else {
      res.status(400).send('Имя пользователя или пароль неверны');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

apiLoginRouter.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/');
});

export default apiLoginRouter;
