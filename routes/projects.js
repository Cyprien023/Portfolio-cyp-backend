// routes/projects.js
const express = require('express');
const router = express.Router();

// Données de projets
const projects = [
    {
        id: 1,
        name: 'Portfolio',
        description: 'Mon portfolio personnel développé avec React.',
        github: 'https://github.com/Cyprien023/Portfolio',
        image: 'https://example.com/portfolio-image.jpg'
    },
    {
        id: 2,
        name: 'App de gestion de tâches',
        description: 'Une application mobile pour gérer les tâches avec React Native.',
        github: 'https://github.com/Cyprien023/TaskApp',
        image: 'https://example.com/taskapp-image.jpg'
    }
];

// Route pour obtenir tous les projets
router.get('/', (req, res) => {
    res.json(projects);
});

module.exports = router;
