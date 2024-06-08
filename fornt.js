const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
var bodyParser = require('body-parser')
const app = express();
const server = createServer(app);
const mongoose = require('mongoose');
const io = new Server(server);
const port = process.env.PORT || 8000

require('./src/config/database.js')
const UserRoute = require('./src/user/userroute.js');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/users', UserRoute)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connect', (socket) => {
  console.log('a user connected');

  //   socket.on('disconnect', () => {
  //     console.log('user disconnected');


  //socket.broadcast.emit("hi");  // Welcome message

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit("chat message", msg); // Broadcast chat message
  });
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});

