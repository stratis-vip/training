import * as dotenv from 'dotenv';
dotenv.config();

import * as mysql from 'mysql';

//δημιουργία σύνδεσης
var con2 = undefined;
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DBASE
});

function connectToDb(callback) {
    connection.connect((err) => {
        if (err) {
            return callback(`Σφάλμα κατά τη σύνδεση στη Βάση Δεδομένων: ${err}`);
        }
        return callback(null);
    });

}

function runQuery(callback) {
    if (connection.state === 'disconnected') {
        return callback({ status: 'fail', message: 'server down' }, []);
    }
    connection.query('SELECT * FROM employees', (err, rows) => {
        if (err) {
            console.log(`ERROR: ${err}`);
            return callback(err, []);
        }
        console.log('Data received from db\n');
        callback(null, rows);
    });
}


export { connectToDb, runQuery };