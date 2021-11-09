var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var test1Router = require('./routes/test1'); // variable for test 1 router
var test2Router = require('./routes/test2'); // variable for test 2 router 
var test3Router = require('./routes/test3'); // variable for test 3 router 

var app = express(); //makes the web server

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter); // make new routers with this format 
app.use('/test1', test1Router); // router for test 1
app.use('/test2', test2Router); // router for test 2 
app.use('/test3', test3Router); // router for test 3

module.exports = app;

//this script creates the express server 