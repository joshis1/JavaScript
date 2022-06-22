# What this App is all about ?

This is just to practice a complete MERN application.

## Front End  --- React related.

* Give system status - Tab?
* Store your suburb from QLD, Australia - Tab -- Locality?
* Get the IP Address - network Info?


### How to buid it to deploy i.e. static app?

```
npm run build
```

## Node App / Express --- Back End related

* npm init -y 
* npm i express
* npm i socket.io@2.2.0 
  
## Use Router

* This is useful to make blueprints like SystemStatus, Address, NetworkInfo.

## Listening on the port.
* I have added a default listening on the port 5000. Note this is backend.

## Modify package.json - to add some specific scripts
* npm i nodemon --save-dev
* "start": "node index.js",
* "dev": "nodemon index.js"

## Running and testing locally.
* npm run start
* or npm run dev

## testing the REST API - 
* http://localhost:5000/SystemStatus 
* Install json formatter plugin in chrome.

```
{
    "cpu": 1,
    "os": "windows"
}

```

## Reference 
* https://www.tutorialspoint.com/expressjs/expressjs_routing.htm 
* https://stackoverflow.com/questions/64295705/trouble-with-fetch-error-handling-in-reactjs 

## Most important.

* Getting CORS issue - 
* Fix - Add -  "proxy": "http://localhost:5000", in the package.json - 
* Reference - https://create-react-app.dev/docs/proxying-api-requests-in-development/
