import sys
sys.path.insert(0, '../../interprocess/pythonRedis');

from redisUtil import RedisUtil
from redisKeys import RedisChannel
import time # remove this once threading is done.
import json # to convert the byte stream to dictionary.


if __name__ == "__main__":
    redisUtilSub = RedisUtil()
    redisUtilSub.subscribe(RedisChannel.RoomBPToRoomHumid)
    humidKey = 'get-room-humid'
    while True:
        message = redisUtilSub.sub.get_message()
        if message:
            #print(type(message.get('data')))
            if isinstance(message.get('data'), bytes):
                humid_val = json.loads(message.get('data').decode('utf-8'))
                print(humid_val)
                if humidKey in humid_val:
                    # print('Found key')
                    humid_data = {"humid": 44 }
                    redisUtilSub.pub(RedisChannel.RoomHumideToRoomBP, humid_data)
        time.sleep(0.001)  # Check how we can do multi-threading - gevent - g monkey patching.



