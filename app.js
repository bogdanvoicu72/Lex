var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRegister = require('./routes/register');
var indexCerere = require('./routes/cerere');
var indexWizard = require('./routes/wizard');
var indexLogin = require('./routes/login');
var indexUserPage = require('./routes/user_page');
var indexHome = require('./routes/home');
var indexAvocat = require('./routes/avocatview');

app.use('/Register', indexRegister);
app.use('/Cerere',indexCerere);
app.use('/Wizard',indexWizard);
app.use('/Login', indexLogin);
app.use('/User-Page', indexUserPage);
app.use('/',indexHome);
app.use('/Avocat',indexAvocat)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
