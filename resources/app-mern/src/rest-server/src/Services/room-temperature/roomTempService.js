let redisUtil = require('../../interprocess/nodejsRedis/redisUtil');
let redisChannel = require('../../interprocess/nodejsRedis/redisKeys.js');


const main = () => {

  let redisUtilSub = new redisUtil();
  let redisUtilPub = new redisUtil();


  // Subscribe here.
  redisUtilSub.sub(redisChannel.RoomBPToRoomService, (err, count) => {
    if (err) {
      console.log('Got error = %s', err.message);
      return;
    }
    console.log('subscribed to channels = %s', count);
    })

    // Important - after subscription here you will get the message.
    redisUtilSub.redis.on("message", (channel, message) => {
      console.log(`RoomTemp Service - Received message from ${channel} channel.`);
      msgObj = JSON.parse(message);
      console.log(msgObj);
      if('get-room-temp' in msgObj)
      {
        redisUtilPub.pub(redisChannel.RoomServiceToRoomBP, {'temp': 27});
      }
    });

}

main();