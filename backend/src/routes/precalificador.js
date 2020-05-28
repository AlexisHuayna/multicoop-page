const mysqlConnection = require('../db');
const emailController = require('../mail/mail');

const express = require('express');
const router = express.Router();

router.post('/api/precalificador', (req, res) => {

    var nombres = req.body.nombres
    var apellidos = req.body.apellidos
    var dni = req.body.dni
    var telefono = req.body.telefono
    var localidad = req.body.localidad
    var monto = req.body.monto

    query_add_pre_calificador = "INSERT INTO preCalificador(nombres, apellidos, dni, telefono, localidad, monto) VALUES ('" + nombres + "','" + apellidos + "','" + dni + "','" + telefono + "','" + localidad + "','" + monto + "')";

    mysqlConnection.query(query_add_pre_calificador, (err, rows, fields) => {
        if (!err) {
            emailController.sendEmail(req, res)
        } else {
            res.status(500).send({ db: 0, email: 0 });
        }
    });


});


module.exports = router;