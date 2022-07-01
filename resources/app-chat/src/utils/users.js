const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {

    // clean the data

    console.log(id);
    console.log(username);
    console.log(room);

    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data

    if (!username || !room) {
        return {
            error: 'Username and room are required'
        };
    }

    // check for existing user 

    const existingUser = users.find((user) => {
        return user.username === username && user.room === room;
    })

    //Valiate username 

    if (existingUser) {
        return { error: 'Username is in use' };
    }

    //Store the user

    const user = { id, username, room };
    users.push(user);
    return {user};

}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id;
    })

    if (index != -1) {
        // found the match
        return users.splice(index, 1)[0];
    }
}


const getuser = (id) => {
    return users.find((user) => {
        return user.id === id;
    })
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) =>
        user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getuser,
    getUsersInRoom
}