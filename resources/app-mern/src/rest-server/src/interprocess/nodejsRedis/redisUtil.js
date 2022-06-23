const Redis = require("ioredis");

let RedisUtil = class redisUtil {
    constructor() {
        this.redis = new Redis();
    }

    pub(channelName, jsonData) {
        this.redis.publish(channelName, JSON.stringify(jsonData));
    }
    sub(channelName, callback) {
        this.redis.subscribe(channelName, (err, data) => {
            callback(err, data);
        });
    }
}


module.exports = RedisUtil;