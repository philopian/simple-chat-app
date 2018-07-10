const http = require('http');
const express = require('express');
const app = express();
const chalk = require("chalk");

const server = http.createServer(app);
const io = require('socket.io').listen(server);

// The server should start listening
server.listen(1234);


if (process.env.NODE_ENV === "production") {
  console.log(chalk.bgBlue.black("The magic happens at http://localhost:1234/"));
  
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
  console.log("... Connected succesfully to the socket");
  socket.on('TO_SERVER', function(msg){
    io.emit('FROM_SERVER', msg);
  });
});