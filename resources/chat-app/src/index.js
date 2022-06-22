const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io'); // get the function

const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, '../public');

// app.use -- the directory path -- public.
app.use(express.static(publicFolder));

const io = socketio(server);

// app.get('/', (req, res) => {
  
//     res.sendFile(publicFolder+'/index.html');
// });

io.on('connection', ()=> {
    console.log('New Web Socket Connection');
})

server.listen(port, ()=> {
    console.log('App is running at %s port', port);
    console.log(`Server is running at ${port} !!`)
});