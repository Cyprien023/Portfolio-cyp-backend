const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const projectRoutes = require('./src/routes/projects');
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
