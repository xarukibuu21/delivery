import express from 'express';

const protection = express.Router();

protection.get('*', (req, res) => {
  res.render('Protection');
});

export default protection;
