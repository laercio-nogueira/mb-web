const express = require('express')
const mustacheExpress =require( 'mustache-express');
const path = require('path');
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

const router = require('./src/router')(express.Router());
const middlewareAssets = require('./src/middleware/middlewareAssets');

const corsOption = {
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption));
app.use(express.json());
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/src/views');
app.use(express.static(path.join(__dirname, 'dist')));  

app.use('/', middlewareAssets, router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))