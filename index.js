/**Commonjs module */
const express = require('express');

/*Es 2015 modules* */
// import express from 'express'
const app = express();
app.get('/', (req, res) =>
{
    res.send({ hi: 'there again!!!' })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)

