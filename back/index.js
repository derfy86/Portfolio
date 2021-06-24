require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors')


const app = express();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// express static used by react
app.use(express.static('assets'));

// road in router
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));