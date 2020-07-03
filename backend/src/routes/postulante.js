const correo_controlador = require('../mail/mail');
const path = require('path')
const express = require('express');
const router = express.Router();

function crearContenidoCorreo(nombres, apellidos, cargo, agencia) {
    return "<h1>Nuevo Postulante</h1>" +
        "<p>Nombres: " + nombres + "</p>" +
        "<p>Apellidos: " + apellidos + "</p>" +
        "<p>Postula a: " + cargo + "</p>" +
        "<p>En la agencia: " + agencia + "</p>";
}


router.post('/api/postulantes', (req, res) => {
    try{
        if(!req.files){
            res.send({
                status: false,
                message: 'No file upload'
            })
        }else{
            let cv = req.files.curriculum
            let cv_path = path.join(__dirname, '../temp/' + cv.name)

            cv.mv('./temp/'+ cv.name)

            var nombres = req.body.nombres
            var apellidos = req.body.apellidos
            var cargo = req.body.cargo
            var agencia = req.body.agencia

            mail_content = {
                remitentes: "ahuayna@multicoop.com.pe",
                subject: "Nuevo postulante",
                text: "Nuevo postulante a " + cargo + " en " + agencia,
                html: crearContenidoCorreo(nombres, apellidos, cargo, agencia),
                attachments: [{
                    filename: cv.name,
                    path: cv_path,
                    contentType: 'application/pdf'
                }]
            };

            correo_controlador.enviarCorreo(req, res, mail_content);         
        }

    } catch (err) {
        res.status(500).end();
    }

/*
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
*/
});

router.get('/api/postulantes', (req, res) => {

});


module.exports = router;