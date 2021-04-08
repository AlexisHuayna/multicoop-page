const conexion_mysql = require('../../db');

const express = require('express');
const { query } = require('express');
const router = express.Router();

router.post('/api/denuncias', (req, res) => {
    const agencia = req.body.agencia;
    const anonimo = req.body.anonimo;
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const tipoDocumento = req.body.tipoDocumento;
    const numeroDocumento = req.body.numeroDocumento;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const puesto = req.body.puesto;
    const incidencia = req.body.incidencia;
    const incidente = req.body.incidente;
    const involucrados = req.body.involucrados;
    const detalleIncidente = req.body.detalleIncidente;

    var query = "INSERT INTO denuncias VALUES (NULL, '" + agencia + "','" + anonimo +
        "','" + nombres + "', '" + apellidos + "', '" + tipoDocumento + "', '" + numeroDocumento +
        "', '" + telefono + "', '" + correo + "', '" + puesto + "', '" + incidencia + "', '" + incidente +
        "', '" + involucrados + "', '"+ detalleIncidente + "', NULL)";

    conexion_mysql.query(query, (err, rows, fields) => {
        if(!err){
            res.status(200).end()
        } else {
            res.status(500).end();
        }
    })
});

router.get('/api/interno/personal', (req, res) => {
    var query = "SELECT concat_ws(' ', apellidoPaterno, apellidoMaterno, nombres) as 'Personal' FROM personal WHERE estado = 1 "
    conexion_mysql.query(query, (err, personal) => {
        if(!err) {
            res.send(personal);
        }else {
            res.status(500).json({status: 'error'});
        }
    });
});

module.exports = router;
