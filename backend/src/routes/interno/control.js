const conexion_mysql = require('../../db');
const correo_controlador = require('../../mail/mail');
const express = require('express');
const pdf = require('html-pdf');
const path = require('path');
const { query } = require('express');
const router = express.Router();

function crearContenidoCorreo(fields) {
    let agencia = fields[0]
    let anonimo = fields[1]
    let nombres = fields[2]
    let apellidos = fields[3]
    let tipoDocumento = fields[4]
    let numeroDocumento = fields[5]
    let telefono = fields[6]
    let correo = fields[7]
    let puesto = fields[8]
    let incidencia = fields[9]
    let incidente = fields[10]
    let involucrados = fields[11]
    let detalleIncidente = fields[12]

    let ret = ""

    if(anonimo == 'si'){
        ret = "<h1>Nueva denuncia</h1>" +
        "<p>Agencia: " + agencia + "</p>" +
        "<p>Incidencia: " + incidencia + "</p>" +
        "<p>Incidente: " + incidente + "</p>" +
        "<p>Involucrados: " + involucrados + "</p>" +
        "<p>Detalle: " + detalleIncidente + "</p>";
    }else {
        ret = "<h1>Nueva denuncia</h1>" +
        "<p>Agencia: " + agencia + "</p>" +
        "<p>Nombres: " + nombres + "</p>" +
        "<p>Apellidos: " + apellidos + "</p>" +
        "<p>Documento: " + tipoDocumento + "</p>" +
        "<p>Numero de documento: " + numeroDocumento + "</p>" +
        "<p>Telefono: " + telefono + "</p>" +
        "<p>Correo: " + correo + "</p>" +
        "<p>Puesto: " + puesto + "</p>" +
        "<p>Incidencia: " + incidencia + "</p>" +
        "<p>Incidente: " + incidente + "</p>" +
        "<p>Involucrados: " + involucrados + "</p>" +
        "<p>Detalle: " + detalleIncidente + "</p>";
    }

    return ret;
}

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

    var query = "INSERT INTO denuncias (agencia, anonimo, nombres, apellidos, tipoDocumento, numeroDocumento, telefono, correo, puesto, incidencia, incidente, involucrados, detalleIncidente) VALUES ('" + agencia + "','" + anonimo + "','" + nombres + "', '" + apellidos + "', '" + tipoDocumento + "', '" + numeroDocumento + "', '" + telefono + "', '" + correo + "', '" + puesto + "', '" + incidencia + "', '" + incidente + "', '" + involucrados + "', '"+ detalleIncidente + "');";

    conexion_mysql.query(query, (err, rows, fields) => {
        if(!err){
            let datos = [agencia, anonimo, nombres, apellidos, tipoDocumento, numeroDocumento, telefono, correo, puesto, incidencia, incidente, involucrados, detalleIncidente]
            let contenido_html = crearContenidoCorreo(datos)
            let filename = incidencia + (new Date()).toString().split(' ')[4] + '.pdf'
            pdf.create(contenido_html).toFile('./' + filename, function(err, res) {
                if(!err){
                    let pdf_path = path.join(__dirname, './' + filename)
                    
                    mail_content = {
                        remitentes: "wherrera@multicoop.com.pe",
                        subject: "Canal de denuncias",
                        text: "Nueva denuncia",
                        html: contenido_html,
                        attachments: [{
                            filename: filename,
                            path: pdf_path,
                            contentType: 'application/pdf'
                        }]
                    };

                    correo_controlador.enviarCorreo(req, res, mail_content);
                }
            });
            
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
