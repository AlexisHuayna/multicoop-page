const conexion_mysql = require('../../db');

const express = require('express');
const router = express.Router();

router.get('/api/nombre/:nombre', (req, res) =>{
    const nombre = req.params.nombre

    const query = "SELECT * FROM cartera WHERE nombre =  '" + nombre + "'"

    conexion_mysql.query(query, (err, result) => {
        if(!err){
            res.status(200).json(result);
        } else {
            res.status(500).send();
        }
    });
});

router.get('/api/codigo/:codigo', (req, res) =>{
    const codigo = req.params.codigo

    const query = "SELECT * FROM cartera WHERE codigo = '" + codigo + "'"

    conexion_mysql.query(query, (err, result) => {
        if(!err){
            res.status(200).json(result);
        } else {
            res.status(500).send();
        }
    });
});

router.get('/api/numero/:numero', (req, res) =>{
    const numero = req.params.numero
    
    const query = "SELECT * FROM cartera WHERE numeroPrestamo = '" + numero + "'"

    conexion_mysql.query(query, (err, result) => {
        if(!err){
            res.status(200).json(result);
        } else {
            res.status(500).send();
        }
    });
});

router.get('/api/dni/:dni', (req, res) =>{
    const dni = req.params.dni

    const query = "SELECT * FROM cartera WHERE documento = '" + dni + "'"

    conexion_mysql.query(query, (err, result) => {
        if(!err){
            res.status(200).json(result);
        } else {
            res.status(500).send();
        }
    });
});

module.exports = router;