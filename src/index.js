const bp = require('body-parser')
const express = require('express')

function startServer() {
    const app = express()
    const port = 8080
    app.use(bp.urlencoded({ extended: true }));
    app.get('/hello', (req, res) => {
        res.send('world');
        res.status(200).end();
    });
    app.get('/repeat-my-fixed', (req, res) => {
        res.send('For better and for worst');
        res.status(200).end();
    });
    app.get('/repeat-my-query', (req, res) => {
        if (req.query.message) {
            res.status(400).send('Bad Request');
            return;
        }
        res.status(200).send(req.query.message);
    });
    app.post('/repeat-my-body', (req, res) => {
        if (!req.body) {
            res.status(400).send('Bad Request');
            return;
        }
        res.status(200).send(req.body);
    });
    app.listen(port, () => console.log(`Ready`))
}

startServer();
