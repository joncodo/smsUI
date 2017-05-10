var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var fs = require("fs");
// var io = require('socket.io')(http, {origins:'*'});
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 80);
app.post('/receive', function (req, res) {
  io.emit('message', {type:'new-message', text: req.body});
  console.log(JSON.stringify(req.body));
})

app.get(/^\/(.*)(?:\/|$)/, function (req, res) {
  fs.readFile("./dist/index.html", {
    "encoding": "utf8"
  }, (err, data) => {
    res.send(data)
  });
})
