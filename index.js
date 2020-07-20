require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
require('./src/models/card');

app.use(express.json());
app.use(cors())
app.use(require('./src/routes.js'));

app.listen(process.env.PORT || 3000);
