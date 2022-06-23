// https://www.npmjs.com/package/request#requestoptions-callback

const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0dbb56595cc50b0e91dc4cdc89644a49&query=Brisbane'

request( {url:url}, (error, response) => {
    if( !error)
    {
       const data = JSON.parse(response.body);
       console.log(data.current);
    }
});


// directly get the JSON data rather than using JSON.parse later.

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Weather API');
    }
    else if (response.body.error) {
        console.log('unable to get the weather');
    }
    else {
        console.log('It is currently %s C out but it feels like %s C degree.', response.body.current.temperature, response.body.current.feelslike);
    }

});

// // Geocoding getting - forward geo-coding getting the latitude and longitude 
// // latitude like x - axis, and longitude like y -axis.
// // http://api.positionstack.com/
// // http://api.positionstack.com/v1/forward?access_key=1f7d64b64e55d089a7e2e5ba387c347a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC


const jabalpurURL = 'http://api.positionstack.com/v1/forward?access_key=1f7d64b64e55d089a7e2e5ba387c347a&query=Jabalpur&limit=1&output=json'


request({ url: jabalpurURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geo location API');
        console.log('error = %s', error.code);

    }
    else if (response.body.error) {
        console.log('unable to find the latitude and longitude');
    }
    else if (response.body.data.length === 0)
    {
        console.log('Unable to find the location');
    }
    else {
        const latitude = response.body.data[0].latitude;
        const longitude = response.body.data[0].longitude;
        console.log('Jabalpur latitude is %s and longitude is %s', latitude, longitude);
    }

});
