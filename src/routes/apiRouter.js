import express from 'express';

const router = express.Router();


router.post('/items ', (req, res) => {
  const {title, img, address, price, sale} = req.body;
  const item = await 
});


export default router;
