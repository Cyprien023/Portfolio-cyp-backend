const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    github_url TEXT,
  );
`;

const insertProjectsQuery = `
  INSERT INTO projects (title, description, github_url) 
  VALUES 
  ('Portfolio', 'Portefolio développé avec React, Typesscript, node.', 'https://github.com/Cyprien023/Portfolio-cyp'),
  ('Application météo', 'Application météo CLI en Rust', 'https://github.com/Cyprien023/Client-meteo-CLI'),
`;

async function initializeDatabase() {
    try {
        await pool.query(createTableQuery);
        console.log('Table "projects" is ready.');

        const result = await pool.query('SELECT COUNT(*) FROM projects');
        const projectCount = result.rows[0].count;

        if (projectCount === '0') {
            console.log('No projects found. Adding default projects...');
            await pool.query(insertProjectsQuery);
            console.log('Default projects added.');
        } else {
            console.log('Projects already exist.');
        }
    } catch (error) {
        console.error('Error initializing database', error);
    } finally {
        pool.end();
    }
}

initializeDatabase();
