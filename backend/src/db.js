const mysql = require('mysql');

const conexion_mysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cucvcn115',
    database: 'multicoop_page'
});

conexion_mysql.connect((err) => {
    if (err) {
        console.log(err);
        console.log('CONNECTION DEFUSED');
        return;
    } else {
        console.log('CONNECTION SUCCESS');
    }
});

module.exports = conexion_mysql;