// Ensure this key matches with the python key defs.
// To do - find a common file format that can be simply used between Python, Javascript and C++.
// Probably, I need a transpiler to convert the extensions.

const RedisChannel = {
    RoomBPToRoomService: 'roomStatusAttribRoomTempService', // from bp to service.
    RoomServiceToRoomBP: 'roomTempServiceAttribRoomStatus'  // // from service to bp.
}

module.exports = RedisChannel;