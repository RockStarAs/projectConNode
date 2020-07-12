var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*Despues de crear una ruta siempre añadirla y luego añadir */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var biciRouter = require('./routes/bicicletas')
var biciAPIrouter = require('./routes/API/bicicleta');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*Despues de crear una ruta es importante añadir una ruta por aqui xd ********************************** */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bicicletas',biciRouter);
app.use('/api/bicicletas',biciAPIrouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
