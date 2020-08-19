const conexion_mysql = require('../db');

const express = require('express');
const router = express.Router();

const colaboradoresTotal = require('./colaboradores');

router.get('/api/time', (req, res) => {
    res.send({time: Date.now()});
});

router.get('/api/interno/rh/validate', (req, res) => {
    const current_date = new Date().toString().split(' ');
    const hora_minima = 8;
    const hora_maxima = 12;
    const current_hora = current_date[4].slice(0,2);

    if(current_hora >= hora_minima && current_hora < hora_maxima) {
        res.send(200, {pass: true})
    } else {
        res.send(200, {pass: false});
    }
});

router.get('/api/interno/rh/ficha/lista', (req, res) => {
    
    const current_dia = datTime.toISOString().slice(0,10);
    const query_fichas_dia = "SELECT dni FROM ficha INNER JOIN colaborador ON ficha.idColaborador = colaborador.id WHERE fecha = " + current_dia;
    
    conexion_mysql.query(query_fichas_dia, (err, colaboradoresQueLlenaron, fields) => {
        if(!err) {
            for(let i = 0; i < colaboradoresQueLlenaron.length; ++i) {
                if(colaboradoresQueLlenaron[i].dni in colaboradoresTotal) {
                    delete colaboradoresTotal[colaboradoresQueLlenaron[i].dni];
                }
            }
            res.status(200).json(colaboradoresTotal);
        } else {
            res.status(500).json({ status: 'error' })
        }
    });

});

router.post('/api/interno/rh/ficha', (req, res) => {
    /*
    const apellidosNombres = req.body.apellidosNombres;
    const dni = req.body.dni;
    */
    const area = req.body.area;
    const direccion = req.body.direccion;
    const celular = req.body.celular;
    const primera = req.body.primera;
    const segunda = req.body.segunda;
    const tercera = req.body.tercera;
    const cuarta = req.body.cuarta;
    const quinta = req.body.textQuinta;
    const sexta = req.body.textSexta;

    const query_add_colaborador = "INSERT INTO";
    const query_add_ficha = "";
    const query_add_respuestas = "";

    conexion_mysql.query(query_add_colaborador, (err, row, fields) => {
        if (!err) {

        } else {

        }
    });

    res.send({
        message: 'success'
    });
})

module.exports = router;