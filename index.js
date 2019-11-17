/**Commonjs module */
const express = require('express');
const keys = require('./config/keys')
require('./models/Users')
require('./services/passport')
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

/*Es 2015 modules* */
// import express from 'express'
const app = express();


app.use(cookieSession(
    {
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    }
));

app.use(passport.initialize())
app.use(passport.session());
require('./routes/authRoutes')(app)

mongoose.connect(keys.mongoURI)

const PORT = process.env.PORT || 5000;

app.listen(PORT)


