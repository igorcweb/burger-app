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
  deleteOne: function(condition, cb) {
    orm.deleteOne('burgers', condition, function(res) {
      cb(res);
    });
  }
};

export default burger;
