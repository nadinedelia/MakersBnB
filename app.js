var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var flash = require('express-flash-messages')
var session = require('express-session')

var logger = require('morgan');
const bodyParser = require('body-parser');
const { client } = require("./dbConfig");
const { user } = require("./addUsers");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var housesRouter = require('./routes/houses');
var signupRouter = require('./routes/signup');
var newSpaceRouter = require('./routes/newSpace');
var spacesRouter = require('./routes/spaces');
var loginRouter = require('./routes/login');
var app = express();
// app.use(flash());
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
// app.use(function(req, res, next){
//     res.locals.success_messages = req.flash('success_messages');
//     res.locals.error_messages = req.flash('error_messages');
//     next();
// });
//
// app.use(flash());
// app.get('/all', (req, res) => {
//   req.flash('message', 'This is a message from the “/” endpoint');
//   res.redirect('/users')
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
