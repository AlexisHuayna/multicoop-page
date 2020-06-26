const conexion_mysql = require('../db');

const express = require('express');
const router = express.Router();

router.get('/api/oportunidades', (req, res) => {
    query_obtener_oportunidades = "SELECT oportunidad.id, agencia.codigo, oportunidad.cargo, oportunidad.horario, oportunidad.beneficios, oportunidad.vacantes, oportunidad.requisitos, oportunidad.funciones, oportunidad.competencias FROM oportunidad INNER JOIN agencia ON oportunidad.agenciaId=agencia.id"

    conexion_mysql.query(query_obtener_oportunidades, (err, oportunidades, fields) => {
        if (!err) {
            res.status(200).json(oportunidades)
        } else {
            res.status(500).json({ status: 'error' })
        }
    })
});

module.exports = router;