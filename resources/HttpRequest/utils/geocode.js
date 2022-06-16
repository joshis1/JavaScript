
const request = require('request');

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=1f7d64b64e55d089a7e2e5ba387c347a&query=' + address + '&limit=1&output=json';
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geo location API', undefined)
        }
        else if (body.data.length === 0) {
            callback('Unable to connect to geo location API', undefined);
        }
        else {
            const latitude = body.data[0].latitude;
            const longitude = body.data[0].longitude;
            callback(undefined, { latitude, longitude })
        }
    }
    )
}

module.exports = geocode;