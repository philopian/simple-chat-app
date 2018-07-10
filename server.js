var http = require('http');
var express = require('express');
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);

// The server should start listening
server.listen(1234);


if (process.env.NODE_ENV === "production") {
  console.log('....prod');
  
  // Register the index route of your app that returns the HTML file
  app.get('/', function (req, res) {
    console.log("Homepage");
    res.sendFile(__dirname + '/DEPLOY/index.html');
  });

  // Expose the www folder as static resources (to access socket.io.js in the browser)
  app.use('/', express.static('DEPLOY'));
} else {
    // Register the index route of your app that returns the HTML file
  app.get('/', function (req, res) {
    console.log("Homepage");
    res.sendFile(__dirname + '/www/index.html');
  });

  // Expose the www folder as static resources (to access socket.io.js in the browser)
  app.use('/', express.static('www'));
}


// Handle connection
io.on('connection', function(socket){
  console.log("Connected succesfully to the socket ...");
  socket.on('TO_SERVER', function(msg){
    console.log("Message Sent: " + msg);
    io.emit('FROM_SERVER', msg);
  });
});