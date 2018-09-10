import connection from './connection';

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
  selectAll: function(cb) {
    let queryString = 'SELECT * FROM burgers';
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(vals, cb) {
    let queryString = 'INSERT INTO burgers (burger_name) VALUES ';
    queryString += '("' + vals + '")';
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    let queryString = 'UPDATE burgers';
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteOne: function(condition, cb) {
    let queryString = 'DELETE FROM burgers';
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

export default orm;
