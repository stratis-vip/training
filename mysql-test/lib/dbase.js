"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");
//δημιουργία σύνδεσης
var con2 = undefined;
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DBASE
});
function connectToDb(callback) {
    connection.connect(function (err) {
        if (err) {
            return callback("\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03C3\u03C4\u03B7 \u0392\u03AC\u03C3\u03B7 \u0394\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD: " + err);
        }
        return callback(null);
    });
}
exports.connectToDb = connectToDb;
function runQuery(callback) {
    if (connection.state === 'disconnected') {
        return callback({ status: 'fail', message: 'server down' }, []);
    }
    connection.query('SELECT * FROM employees', function (err, rows) {
        if (err) {
            console.log("ERROR: " + err);
            return callback(err, []);
        }
        console.log('Data received from db\n');
        callback(null, rows);
    });
}
exports.runQuery = runQuery;
