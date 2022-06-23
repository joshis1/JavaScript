var express = require('express');
var router = express.Router();

let redisUtil = require('../interprocess/nodejsRedis/redisUtil');

let redisUtilSub = new redisUtil();
let redisUtilPub = new redisUtil();


let redisChannel = require('../interprocess/nodejsRedis/redisKeys.js');

let channelsTosubscribe = [redisChannel.RoomServiceToRoomBP, redisChannel.RoomHumideToRoomBP]

redisUtilSub.sub(channelsTosubscribe , (err, count) => {
  if (err) {
    console.log('Got error = %s', err.message);
    return;
  }
  console.log('subscribed to channels = %s', count);

})


// Important - after subscription here you will get the message.
redisUtilSub.redis.on("message", (channel, message) => {
  console.log(`Room Status - Received message from ${channel} channel.`);
  console.log(JSON.parse(message));
  // may be socket io to send across the room temperature.
});


router.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // very important otherwise CORS error.
  // browser security is enabled that it does not allow to use cross domain data.
  console.log('Publishing the messsage');
  redisUtilPub.pub(redisChannel.RoomBPToRoomService, { 'get-room-temp': 0 });
  redisUtilPub.pub(redisChannel.RoomBPToRoomHumid, { 'get-room-humid': 0 });
  return res.sendStatus(200);
})

// front-end is expecting - Important to check- while doing socket io.
// {temp: <val>, humid: <val>}

module.exports = router;

//Once the client enters the subscribed state it is not supposed to issue any other commands,
// except for additional SUBSCRIBE, PSUBSCRIBE, UNSUBSCRIBE and PUNSUBSCRIBE commands.

// http://redis.io/commands/subscribe
