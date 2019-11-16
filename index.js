/**Commonjs module */
const express = require('express');
require('./services/passport')

/*Es 2015 modules* */
// import express from 'express'
const app = express();
require('./routes/authRoutes')(app)



const PORT = process.env.PORT || 5000;

app.listen(PORT)

