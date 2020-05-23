const mysqlConnection = require('../db');

const express = require('express');
const router = express.Router();

router.post('/reclamacion', (req, res) => {

    res.json({ 'status': 'recalamcion works' });
});


module.exports = router;