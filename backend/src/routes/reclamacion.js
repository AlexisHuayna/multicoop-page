const conexion_mysql = require('../db');
const hojaReclamacion = require('../entities/HojaReclamacion');
const express = require('express');
const router = express.Router();

router.post('/api/reclamacion', (req, res) => {

    var es_socio = req.body.socio ? 1 : 0
    var agencia = req.body.agencia
    var nombres = req.body.nombres
    var apellidos = req.body.apellidos
    var tipo_documento = req.body.tipoDocumento
    var numero_documento = req.body.numeroDocumento
    var direccion = req.body.direccion
    var departamento = req.body.departamento
    var provincia = req.body.provincia
    var distrito = req.body.distrito
    var telefono = req.body.telefono
    var correo = req.body.correo
    var incidencia = req.body.incidencia
    var producto = req.body.producto
    var tipo_reclamacion = req.body.tipoReclamacion
    var detalle_reclamacion = req.body.detalleReclamacion

    query_numero_hojas_libro = `SELECT id, num_hojas FROM libroReclamaciones 
            WHERE libroReclamaciones.id_agencia = ( SELECT id FROM sede WHERE 
            sede.cod=` + agencia + " )"

    conexion_mysql.query(query_numero_hojas_libro, (err, result, fields) => {
        if (!err) {
            id_libro = result[0].id
            numero_hojas_libro = result[0].num_hojas

            ubigeo = departamento + provincia + distrito
            codigo_hoja = agencia + "-" + ('000000' + (numero_hojas_libro + 1)).slice(-5)


            query_agregar_reclamacion = "INSERT INTO hojaReclamacion(es_socio, nombres" +
                ", apellidos, tipo_documento, num_documento, direccion, ubigeo, telefono" +
                ", correo, fec_incidencia, producto, tipo_reclamacion, detalle_reclamacion" +
                ", id_libro, codigo_hoja) VALUES ('" + es_socio + "','" + nombres + "','"
                + apellidos + "','" + tipo_documento + "','" + numero_documento + "','" +
                direccion + "','" + ubigeo + "','" + telefono + "','" + correo + "','" +
                incidencia + "','" + producto + "','" + tipo_reclamacion + "','" +
                detalle_reclamacion + "','" + id_libro + "','" + codigo_hoja + "')"

            query_actualizar_libro = "UPDATE libroReclamaciones SET num_hojas='" + (numero_hojas_libro + 1) + "' WHERE id=" + id_libro;

            conexion_mysql.query(query_actualizar_libro, (err, result, fields) => {
                if (!err) {
                    conexion_mysql.query(query_agregar_reclamacion, (err, result, fields) => {
                        if (!err) {
                            res.status(200).send({ reclamacion: 1 })
                        } else {
                            res.status(500).send({ reclamacion: 0 })
                        }
                    });
                } else {
                    res.status(500).send({ reclamacion: 0 })
                }
            });
        } else {
            res.status(500).send({ reclamacion: 0 })
        }
    });
});


module.exports = router;