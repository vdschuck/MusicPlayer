const express = require('express');
const session = require('express-session');
const routes = require('./routes/Routes');
const cors = require('cors');
const server = express();
require('./db/config');
require('./app/config');

// server uses
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(session({
  genid: (req) => {
    return uuid();
  },
  secret: 'example',
  resave: false,
  saveUninitialized: true
}));

// error handler
server.use(function (req, res, next) {
  next(createError(404));
});

// helpers
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// list on
server.listen(process.env.PORT);