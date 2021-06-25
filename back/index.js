require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors')
const sanitizer = require('./app/middleware/sanitizer')


const app = express();

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 
  };

app.use(cors(corsOptions));

app.use(sanitizer);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// express static used by react
app.use(express.static('assets'));

// road in router
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));