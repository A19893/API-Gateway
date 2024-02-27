require('dotenv').config();
const express = require("express");
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')
const {rateLimit} = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    limit: 5, 
})

app.use(morgan('combined'));
app.use(limiter)
app.use('/bookingService', createProxyMiddleware({target: 'htpp://localhost:3002'}))
app.get('/home', (req, res)=>{
return res.status(200).json("Got that home route")
})

app.listen(process.env.APP_PORT, ()=>{
    console.clear()
    console.log(`Server is listening on port ${process.env.APP_PORT}`)
})