// https://www.npmjs.com/package/request

//const request = require("request");
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2];

if (address === undefined) {
    console.log('Please give the city name');
}
else {

    //callback chaining 

    //CMD line argument - city name - 
    //Example - 
    // Like node app.js Brisbane.
    geocode(address, (error, data) => {

        if (error) {
            // return and break the callback chaining.
            return console.log(error);
        }
        console.log(data);

        // if the object is undefined then the destructuring will fail.
        // {temperature, feelslike} = {} helps to destructure.
        // = {} is a default value for the  parameter.
        // this is the default function parameters.
        forecast(data, (error, { temperature, feelslike } = {}) => {
            if (error === undefined) {
                console.log('Data', temperature, feelslike);
            }
            else {
                console.log('Error', error);
            }
        })
    })
}


