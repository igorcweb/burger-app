import mysql from 'mysql2';

const config = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'burgers_db'
};

const connection = mysql.createConnection(config);

connection.connect(err => {
  if (err) {
    console.log('error connecting: ', err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

export default connection;
