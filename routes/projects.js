const express = require('express');
const router = express.Router();

const projects = [
    {
        id: 1,
        name: 'Portfolio',
        description: 'Portefolio développé avec React, Typesscript, node.',
        github: 'https://github.com/Cyprien023/Portfolio-cyp',
        image: '⚛️'
    },
    {
        id: 2,
        name: 'Application météo CLI',
        description: 'Application météo CLI en Rust',
        github: 'https://github.com/Cyprien023/Client-meteo-CLI',
        image: '🦀'
    }
];

router.get('/', (req, res) => {
    res.json(projects);
});

module.exports = router;
