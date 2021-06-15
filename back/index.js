require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();

// express static used by react
app.use(express.static('assets'));

// road in router
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app on http://localhost:${port}`));