const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ServerMulti321@',
    database: 'multicoop_page'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        console.log('CONNECTION DEFUSED');
        return;
    } else {
        console.log('CONNECTION SUCCESS');
    }
});

module.exports = mysqlConnection;