import express from 'express';

const router = express.Router();

import burger from '../models/burger';

router.get('/', (req, res) => {
  burger.selectAll(data => {
    const hbsObj = {
      burgers: data
    };
    res.render('index', hbsObj);
  });
});

export default router;
