import express from 'express';

const apiAuthRouter = express.Router();

apiAuthRouter.post('signup', async (req, res) => {
  const {
    name, email, password, phone, address,
  } = req.body;
  if (!name || !email || !password || !phone || !address) {
    return res.status(400)
      .json({ error: 'Неверные данные' });
  }

  const [newUser, createdUser] = await UserActivation.findOrCreate({
    where: { email },
    defaults: {
      name, email, password, phone, address,
    },
  });
  if (!createdUser) {
    return res.status(400)
      .json({ error: 'Пользователь уже зарегистрирован' });
  }
});
