const correo_controlador = require('../mail');

const express = require('express');
const router = express.Router();

function crearContenidoCorreo(nombres, apellidos, cargo, agencia) {
    return "<h1>Nuevo Postulante</h1>" +
        "<p>Nombres: " + nombres + "</p>" +
        "<p>Apellidos: " + apellidos + "</p>" +
        "<p>Postula a: " + cargo + "</p>" +
        "<p>En la agencia: " + agencia + "</p>";
}


router.post('/postulantes', (req, res) => {

    var nombres = req.body.nombres
    var apellidos = req.body.apellidos
    var cargo = req.body.cargo
    var agencia = req.body.agencia

    var cv_ruta = "por verse"
    var cv_nombre = "por verse"

    res.json({
        remitentes: "ahuayna@multicoop.com.pe",
        subject: "Nuevo postulante",
        text: "Nuevo postulante a " + cargo + " en " + agencia,
        html: crearContenidoCorreo(nombres, apellidos, cargo, agencia),
        attachments: [{
            filename: cv_nombre,
            path: cv_ruta,
            contentType: 'application/pdf'
        }]
    })

    correo_controlador.enviarCorreo(req, res)

    res.status(200).json({ postulante: 1 });

});

router.get('/postulantes', (req, res) => {

});


module.exports = router;