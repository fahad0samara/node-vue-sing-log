const express = require('express');
const app = express();
const cors = require('cors')

 

const path = require('path');
const sing= require('./router/sing');
const log= require('./router/log');
const veremail= require('./router/verif');
app.use(cors())
app.set('port', process.env.port || 2020) 
app.use(express.json())
app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})
app.use('/sing',sing);
app.use('/log',log);
app.use('/verify-email',veremail);

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})