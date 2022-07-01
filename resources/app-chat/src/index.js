const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io'); // get the function
const Filter = require('bad-words');

const { generateMessage, generateLocationMessage } = require('./utils/messages');

const { addUser, removeUser, getuser, getUsersInRoom } = require('./utils/users');

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

// connection is a built in event with socket io.
io.on('connection', (socket) => {
    console.log('New Web Socket Connection');
    // socket.emit('message', generateMessage('Welcome!'));
    //socket.broadcast.emit 
    // emit the message to everyone except that 
    // particular socket connection.

    // socket.broadcast.emit('message', generateMessage('A new user has joined'));

    socket.on('join', (options, callback) => {

        console.log({ ...options });
        const { user, error } = addUser({ id: socket.id, ...options });

        if (error) {
            return callback(error);
        }
        //specifically emit
        socket.join(user.room);

        // socket.emit, io.emit, socket.broadcast.emit
        // io.to('specific room').emit
        //socket.broadcast.to('specific room).emit

        socket.to(user.room).emit('message', generateMessage('Welcome!'));
        socket.to(user.room).broadcast.emit('message', generateMessage('Admin -', ` ${user.username} has joined! `));
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room),
        })

    })

    socket.on('sendMessage', (data, callback) => {
        const filter = new Filter();
        console.log(data);

        if (filter.isProfane(data)) {
            return callback('profanity is not allowed');
        }

        const user = getuser(socket.id);
        console.log(user);
        if (user) {
            io.to(user.room).emit('message', generateMessage(user.username, data));
            callback('delivered');
        }
    })

    // https://google.com/maps?q=0,0
    socket.on('sendLocation', (coords, callback) => {
        console.log(coords);
        const user = getuser(socket.id);
        if (user) {
            io.to(user.room).emit('locationMessage', generateLocationMessage(user.username, `https://google.com/maps?q=${coords.latitude},${coords.longitude}`));
            callback('location info delivered');
        }
        else {
            callback('Admin - Fail to deliver message')
        }
    });

    // disconnect is a built in event in the socket io.
    socket.on('disconnect', () => {
        console.log('A user has disconnected');
        user = getuser(socket.id);
        if (user) {
            console.log('removing user');
            removeUser(user.id);
            io.to(user.room).emit('message', generateMessage('Admin - ', `${user.username} has left the chat`));
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room),
            })
        }
    })

})

server.listen(port, () => {
    console.log('App is running at %s port', port);
    console.log(`Server is running at ${port} !!`)
});