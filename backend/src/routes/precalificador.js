const conexion_msql = require('../db');
const correoControlador = require('../mail/mail');
const emails = require('../mail/mailsAdmin');

const express = require('express');
const router = express.Router();


function obtenerCorreoAdministrador(localidad) {
    email = emails['Administradores'][localidad]
    return email
}

function crearContenidoCorreo(nombres, apellidos, dni, telefono, monto) {
    return "<h1>Nuevo precalificador web</h1>" +
        "<p>Nombres: " + nombres + "</p>" +
        "<p>Apellidos: " + apellidos + "</p>" +
        "<p>Numero de DNI: " + dni + "</p>" +
        "<p>Teléfono: " + telefono + "</p>" +
        "<p>Monto solicitado: " + monto + "</p>";
}

router.post('/api/precalificador', (req, res) => {

    var nombres = req.body.nombres
    var apellidos = req.body.apellidos
    var dni = req.body.dni
    var telefono = req.body.telefono
    var localidad = req.body.localidad
    var monto = req.body.monto

    query_agregar_pre_calificador = "INSERT INTO preCalificador(nombres, apellidos, dni, telefono, localidad, monto) VALUES ('" + nombres + "','" + apellidos + "','" + dni + "','" + telefono + "','" + localidad + "','" + monto + "')";

    conexion_msql.query(query_agregar_pre_calificador, (err, rows, fields) => {
        if (!err) {

            req.body = {
                remitentes: obtenerCorreoAdministrador(localidad),
                subject: "Precalificador Web",
                text: "Datos de precalificador",
                html: crearContenidoCorreo(nombres, apellidos, dni, telefono, monto),
                attachments: []
            }

            correoControlador.enviarCorreo(req, res)
        } else {
            res.status(500).send({ db: 0, email: 0 });
        }
    });
});


module.exports = router;