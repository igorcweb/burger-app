import orm from '../config/orm';

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  }
};

export default burger;
