import enum

class RedisChannel(enum.Enum):
    RoomBPToRoomService = 'roomStatusAttribRoomTempService',  # from Room status bp to Room Temp service.
    RoomServiceToRoomBP = 'roomTempServiceAttribRoomStatus',  # from Room Temp service to Room status bp.
    RoomBPToRoomHumid = 'roomStatusAttribRoomHumidService',   # from  Room status bp to Room Humid service
    RoomHumideToRoomBP = 'roomHumidServiceAttribRoomStatus'   # from Room Humid service to  Room status bp.