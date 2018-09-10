import express from 'express';

const router = express.Router();

import burger from '../models/burger';

router.post('/', (req, res) => {
  console.log(req.body.burger_name);
  burger.insertOne(req.body.burger_name, result => {
    res.json({ id: result.insertId });
  });
});

router.delete('/:id', (req, res) => {
  const condition = 'id = ' + req.params.id;
  burger.deleteOne(condition, result => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end;
    }
  });
});

export default router;
