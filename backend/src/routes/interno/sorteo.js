const conexion_mysql = require('../../db');
const express = require('express');
const router = express.Router();

router.post('/api/sorteo', (req, res) => {
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const ciudad = req.body.ciudad;

    const query = "INSERT INTO sorteo (nombres, apellios, telefono, correo, ciudad) VALUES ('NULL', '" + nombres + "','" + apellidos + "','" + telefono + "','" + correo + "','" + ciudad + "')";
    
    conexion_mysql.query(query, (err, declarante) => {
        if(!err) {
            res.status(200).json({resp: '1'});

        } else {
            res.status(500).json({resp: '0'});
        }
    })

});

module.exports = router;