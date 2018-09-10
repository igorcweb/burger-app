import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const { DBUSER, DBPASS, JAWSDB_URL } = process.env;

const config = {
  host: 'localhost',
  port: 3306,
  user: DBUSER,
  password: DBPASS,
  database: 'burgers_db'
};

let connection;
let host;

if (JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);
  host = 'JAWSDB';
} else {
  connection = mysql.createConnection(config);
  host = 'localhost';
}

connection.connect(err => {
  if (err) {
    console.log('error connecting: ', err);
    return;
  }
  console.log('connected with ' + host);
});

export default connection;
