var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require("fs");
var cors = require('cors');
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'));
var router = app.listen(process.env.PORT || 80);
var io = require('socket.io')(router);

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "credentials": true
}));

app.options('/*', function(req, res) {
res.send(200, 'CHECKOUT,CONNECT,COPY,DELETE,GET,HEAD,LOCK,M-SEARCH,MERGE,MKACTIVITY,MKCALENDAR,MKCOL,MOVE,NOTIFY,PATCH,POST,PROPFIND,PROPPATCH,PURGE,PUT,REPORT,SEARCH,SUBSCRIBE,TRACE,UNLOCK,UNSUBSCRIBE');
});


app.post('/receive', function (req, res) {
  io.emit('message', {type:'new-message', text: req.body});
  res.json(req.body);
})

app.get(/^\/(.*)(?:\/|$)/, function (req, res) {
  fs.readFile("./dist/index.html", {
    "encoding": "utf8"
  }, (err, data) => {
    res.send(data)
  });
})
