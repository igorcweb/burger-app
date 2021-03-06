import orm from '../config/orm';

const burger = {
  selectAll: function(cb) {
    orm.selectAll(res => {
      cb(res);
    });
  },

  insertOne: function(vals, cb) {
    orm.insertOne(vals, res => {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(objColVals, condition, res => {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne(condition, res => {
      cb(res);
    });
  }
};

export default burger;
