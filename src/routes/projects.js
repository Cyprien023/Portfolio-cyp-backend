const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching projects', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
