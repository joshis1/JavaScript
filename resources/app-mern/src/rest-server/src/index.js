const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

// blue prints -- routers

const systemStatus = require('./blueprints/systemStatus');

// getting room status here.
const roomStatus = require('./blueprints/roomStatus');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 5000;

const io = socketio(server);

io.on('connection', ()=> { 
    console.log('Got connected WebServer')
});

app.use('/systemStatus', systemStatus);
app.use('/roomStatus', roomStatus);

server.listen(port, ()=> {
    console.log(`server is running on the port = ${port}`);

});
