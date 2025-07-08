const express = require('express');
const app = express()

app.get('/', function (req, res) {
    res.send('Home page')
})

app.get('/holamundo', function (req, res) {
    res.send('Hola mundo ruteado')
})

app.use(function (req, res, next) {
    res.status(404).send('404 | Page not found');
});

app.listen(8080)

