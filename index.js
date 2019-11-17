/**Commonjs module */
const express = require('express');
const keys = require('./config/keys')
require('./models/Users')
require('./services/passport')
const mongoose = require('mongoose');

/*Es 2015 modules* */
// import express from 'express'
const app = express();
require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURI)

const PORT = process.env.PORT || 5000;

app.listen(PORT)


