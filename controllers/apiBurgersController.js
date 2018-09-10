import express from 'express';

const router = express.Router();

import burger from '../models/burger';

router.post('/', (req, res) => {
  burger.insertOne(req.body.burger_name, result => {
    res.json({ id: result.insertId });
  });
});

router.put('/:id', function(req, res) {
  const condition = 'id = ' + req.params.id;
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        return releaseEvents.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete('/:id', (req, res) => {
  const condition = 'id = ' + req.params.id;
  burger.deleteOne(condition, result => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

export default router;
