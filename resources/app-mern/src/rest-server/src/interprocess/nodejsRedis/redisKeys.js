// Ensure this key matches with the python key defs.
// To do - find a common file format that can be simply used between Python, Javascript and C++.
// Probably, I need a transpiler to convert the extensions.

const RedisChannel = {
    RoomBPToRoomService: 'roomStatusAttribRoomTempService', // from Room status bp to Room Temp service.
    RoomServiceToRoomBP: 'roomTempServiceAttribRoomStatus',  // from Room Temp service to Room status bp.
    RoomBPToRoomHumid: 'roomStatusAttribRoomHumidService', // from  Room status bp to Room Humid service.
    RoomHumideToRoomBP: 'roomHumidServiceAttribRoomStatus' // from Room Humid service to  Room status bp.
}

module.exports = RedisChannel;