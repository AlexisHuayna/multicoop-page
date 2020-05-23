const mysqlConnection = require('../db');

const express = require('express');
const router = express.Router();

router.post('/precalificador', (req, res) => {
    query_add_pre_calificador = "SELECT * FROM preCalificador";

    mysqlConnection.query(query_add_pre_calificador, (err, rows, fields) => {
        if (!err) {
            console.log(fields);
            res.json(rows);
            //res.json({'status': '1'});
        } else {
            console.log(err);
            res.json({ 'status': '0' })
        }
    });
});


module.exports = router;