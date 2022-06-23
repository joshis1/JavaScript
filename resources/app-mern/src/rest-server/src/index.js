const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

// blue prints -- routers

const systemStatus = require('./routes/systemStatus');

// getting room status here.
const roomStatus = require('./routes/roomStatus');

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 5000;

const io = socketio(server);

io.on('connection', ()=> { 
    console.log('Got connected WebServer')
});

app.use('/api/v1/systemStatus', systemStatus);
app.use('/api/v1/roomStatus', roomStatus);

server.listen(port, ()=> {
    console.log(`server is running on the port = ${port}`);

});
