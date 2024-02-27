const express = require("express");
const morgan = require('morgan')
const app = express();

app.use(morgan('combined'));

require('dotenv').config();

app.get('/home', (req, res)=>{
return res.status(200).json("Got that home route")
})
app.listen(process.env.APP_PORT, ()=>{
    console.clear()
    console.log(`Server is listening on port ${process.env.APP_PORT}`)
})