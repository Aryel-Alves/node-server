const express = require('express');
const cors = require('cors')
const fs = require('fs')

var app = express();

app.use(cors())

app.get('/', express.static(__dirname + '/dist'))

app.listen(5095, function () {
    console.log('Estilo rodando na porta 5095!');
});