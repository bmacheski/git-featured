var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var less       = require('less-middleware');
var routes     = require('./routes')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : false }));
app.use('/', routes);
app.use(less('public'));

app.use(function (req, res, next) {
  res.status(403).send('Unauthorized path.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening on port:', port);
});
