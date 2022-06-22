const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

// blue prints -- routers

const systemStatus = require('./blueprints/systemStatus');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 5000;

const io = socketio(server);

io.on('connection', ()=> { 
    console.log('Got connected WebServer')
});

app.use('/systemStatus', systemStatus);

server.listen(port, ()=> {
    console.log(`server is running on the port = ${port}`);

});
