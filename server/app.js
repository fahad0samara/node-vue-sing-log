const express = require('express');
const app = express();
const path = require('path');
const sing= require('./router/sing');
const log= require('./router/log');

app.set('port', process.env.port || 1515) 
app.use(express.json())
app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})
app.use('/sing',sing);
app.use('/log',log);

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})