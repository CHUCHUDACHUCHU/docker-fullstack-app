const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

/* db.pool.query(
    `CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`,
    (err, results, fileds) => {
        console.log('results', results);
    }
); */

app.get('/api/values', function (req, res) {
    db.pool.query('SELECT * FROM lists', (err, results, fileds) => {
        if (err) return res.status(500).send(err);
        else return res.json(results);
    });
});

app.post('/api/value', function (req, res, next) {
    console.log('백엔드 들어옴');
    db.pool.query(
        `INSERT INTO lists (value) VALUES("${req.body.value}")`,
        (err, results, fileds) => {
            if (err) return res.status.send(err);
            else return res.json({ success: true, value: req.body.value });
        }
    );
});

app.listen(5000, () => {
    console.log('애플리케이션 5000 start');
});
