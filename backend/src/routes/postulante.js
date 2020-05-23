const mysqlConnection = require('../db');

const express = require('express');
const router = express.Router();

router.post('/postulante', (req, res) => {
    res.json({ 'status': 'postulante works' });
});


module.exports = router;