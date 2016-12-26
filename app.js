

'use strict';
const PORT = 808;
const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const bodyParser = require('body-parser');
const app = express();
const server = app.listen(PORT, listenHandler);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', (req, res) => {
    res.render('index');
});


function listenHandler() {
    console.log('Server started on port:' + PORT);
}
