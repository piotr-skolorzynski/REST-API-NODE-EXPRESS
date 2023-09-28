const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');

const app = express();

//to parsowanie jest ok dla contentu x-www-form-urlencoded czyli dla formularzy odpalanych na submit, jeśli
// app.use(bodyParser.urlencoded());

//parsowanie dla formatu JSON czyli headers: { 'Content-Type': 'application/json' }
app.use(bodyParser.json());

app.use('/feed', feedRoutes);

app.listen(3000);
