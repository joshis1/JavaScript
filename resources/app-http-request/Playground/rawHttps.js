// node js document 
// node version 
// $ node -v
// v16.15.0

// https://nodejs.org/dist/latest-v16.x/docs/api/http.html

// this is the core module i.e. inside the nodejs.

const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=0dbb56595cc50b0e91dc4cdc89644a49&query=37.8267,-122.4233';

const request = http.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        //console.log(chunk);
    })

    response.on('end', () => {
        console.log('got end');
        //console.log(data);
        const body = JSON.parse(data);
        console.log(body);
    })

})

//request.on is the listener.

request.on('error', (error) => {
    console.log('An error ', error);
});

request.end()

// In real we are using either request or axios.