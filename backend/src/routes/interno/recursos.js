const conexion_mysql = require('../db');

const express = require('express');
const router = express.Router();

router.get('/api/time', (req, res) => {
    res.send({time: Date.now()});
});

router.post('/api/interno/rh/ficha', (req, res) => {
    res.send({
        message: 'success'
    });
})

module.exports = router;