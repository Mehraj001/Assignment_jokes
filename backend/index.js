const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mehraj@123',
    database: 'jokeDB'
});

app.get('/search-jokes', async (req, res) => {
    const term = req.query.term;
    try {
        const response = await axios.get(`https://icanhazdadjoke.com/search?term=${term}`, {
            headers: { Accept: 'application/json' }
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching jokes' });
    }
});

app.post('/save-favorite', (req, res) => {
    const { joke_id, joke_text } = req.body;
    db.query(
        'INSERT IGNORE INTO favorites (joke_id, joke_text) VALUES (?, ?)',
        [joke_id, joke_text],
        (err, results) => {
            if (err) return res.status(500).json({ error: 'Error saving favorite' });
            res.json({ success: true });
        }
    );
});

app.get('/get-favorites', (req, res) => {
    db.query('SELECT * FROM favorites', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error retrieving favorites' });
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));