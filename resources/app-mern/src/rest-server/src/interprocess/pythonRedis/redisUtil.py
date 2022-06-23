import redis
import json

from redisKeys import RedisChannel

class RedisUtil:
    def __init__(self):
        self.redis = redis.Redis(host='localhost', port=6379, db=0)
        self.sub = self.redis.pubsub()
    
    def pub(self, channelName, jsonData):
        channel = channelName.value
        self.redis.publish(channel, json.dumps(jsonData))

    def subscribe(self, channelName):
        # get enum value - RoomBPToRoomHumid
        # print(channelName.value)
        channel = channelName.value
        self.sub.subscribe(channel)


