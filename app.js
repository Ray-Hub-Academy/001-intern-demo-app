var createError = require('http-errors'); //Request Response <=> Errors
var express = require('express'); //express framework
var path = require('path'); //folder access
var cookieParser = require('cookie-parser'); //cookie management
var logger = require('morgan'); //logs monitor

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//filter req data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//public data
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/pages.routes')(app);

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

// module.exports = app;
//register port and process in machine
app.listen(5002, () => {
  console.log('Server is running on port '+5002);
});
