var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:7000'}));
app.use(express.static(path.join(__dirname, 'public')));

var indexRegister = require('./routes/register');
var indexCerere = require('./routes/cerere');
var indexWizard = require('./routes/wizard');
var indexLogin = require('./routes/login');
var indexUserPage = require('./routes/user_page');
var indexHome = require('./routes/home');
var indexAvocat = require('./routes/avocatview');
var indexAvocatRegister = require('./routes/registeravocat');
var indexLoginAvocat = require('./routes/loginavocat');
var indexGetUsers = require('./routes/Get-users');
var indexLogout = require('./routes/Logout');

app.use('/Register', indexRegister);
app.use('/Cerere',indexCerere);
app.use('/Wizard',indexWizard);
app.use('/Login', indexLogin);
app.use('/User-Page', indexUserPage);
app.use('/',indexHome);
app.use('/Avocat',indexAvocat)
app.use('/Avocat-Register',indexAvocatRegister);
app.use('/Avocat-Login',indexLoginAvocat);
app.use('/Get-users',indexGetUsers);
app.use('/Logout',indexLogout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next();
});



module.exports = app;
