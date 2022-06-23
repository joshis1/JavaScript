//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



const request = require('request');

const forecast = ({latitude, longitude} = {}, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0dbb56595cc50b0e91dc4cdc89644a49&query=' + latitude + ',' + longitude;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to get the weather for the location', undefined);
        }
        else if (response.error) {
            callback('Unable to find the weather for the given location', undefined);
        }

        else {
            const temperature = response.body.current.temperature;
            const feelslike = response.body.current.feelslike;
            //calling the callback.
            callback(undefined, { temperature, feelslike });
        }
    });

}

module.exports = forecast;