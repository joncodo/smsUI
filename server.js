var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 80);
app.post('/receive', function (req, res) {
  res.send(req.body);
})
