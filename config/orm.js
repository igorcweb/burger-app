import connection from './connection';

function printQuestionMarks(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + '=' + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

const orm = {
  selectAll: function(table, cb) {
    let queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function() {},
  updateOne: function() {}
};

export default orm;
