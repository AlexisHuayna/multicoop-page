const conexion_mysql = require('../db');

const express = require('express');
const router = express.Router();

router.get('/api/oportunidad', (req, res) => {
    query_obtener_oportunidades = "SELECT * FROM oportunidad"

    conexion_mysql.query(query_obtener_oportunidades, (err, oportunidades, fields) => {
        if (!err) {
            res.status(200).json(oportunidades)
        } else {
            res.status(500).json({ status: 'error' })
        }
    })
});

module.exports = router;