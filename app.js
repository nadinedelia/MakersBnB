var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var flash = require('express-flash-messages');
var session = require('express-session');

var logger = require('morgan');
const bodyParser = require('body-parser');
const { client } = require('./dbConfig');
const { user } = require('./addUsers');

var dotenv = require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var housesRouter = require('./routes/houses');
var signupRouter = require('./routes/signup');
var newSpaceRouter = require('./routes/newSpace');
var spacesRouter = require('./routes/spaces');
var loginRouter = require('./routes/login');

var bookSpaceRouter = require('./routes/bookSpace');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/about', function (req, res) {
  res.sendFile('./views/about.html', { root: __dirname });
});

// testing session
app.use(
  session({
    secret: 'Shh, its a secret!',
    cookie: {},
    resave: false,
    saveUninitialized: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/houses', housesRouter);
app.use('/signup', signupRouter);
app.use('/newSpace', newSpaceRouter);
app.use('/spaces', spacesRouter);
app.use('/login', loginRouter);
app.use('/book', bookSpaceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
