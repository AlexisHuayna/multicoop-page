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

function agenciaValor(agenciaId){
    var agencia_valor = ''
    if(agenciaId == '01'){
        agencia_valor = 'Arequipa'
    }else if (agenciaId == '02'){
        agencia_valor = 'Juliaca'
    }else if (agenciaId == '03'){
        agencia_valor = 'Puno'
    }else if(agenciaId == '04'){
        agencia_valor = 'Moquegua'
    }else if(agenciaId == '05'){
        agencia_valor = 'Ayaviri'
    }else if(agenciaId == '06'){
        agencia_valor = 'Tacna'
    }else if(agenciaId == '07'){
        agencia_valor = 'Cusco'
    }else{
        agencia_valor = 'Todas'
    }
    return agencia_valor
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
                remitentes: "ecruz@multicoop.com.pe",
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

});



module.exports = router;