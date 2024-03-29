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
  
### Use Router

* This is useful to make blueprints like SystemStatus, Address, NetworkInfo.

### Listening on the port.
* I have added a default listening on the port 5000. Note this is backend.

### Modify package.json - to add some specific scripts
* npm i nodemon --save-dev
* "start": "node index.js",
* "dev": "nodemon index.js"

### Running and testing locally.
* npm run start
* or npm run dev

### testing the REST API - 
* http://localhost:5000/SystemStatus 
* Install json formatter plugin in chrome.

```
{
    "cpu": 1,
    "os": "windows"
}

```

### Performance tesing of the REST API 
* Use Apache benchmark to test the REST API - 
* Reference - https://httpd.apache.org/docs/2.4/programs/ab.html 

### Reference - Express Routing
* https://www.tutorialspoint.com/expressjs/expressjs_routing.htm 
* https://stackoverflow.com/questions/64295705/trouble-with-fetch-error-handling-in-reactjs 

### CORS.

* Getting CORS issue - 
* Fix - Add -  res.setHeader('Access-Control-Allow-Origin', '*'); 
* Reference - https://stackoverflow.com/questions/24897801/enable-access-control-allow-origin-for-multiple-domains-in-node-js

## IPC - backend using Redis Pub/Sub

* Install Redis server 
* I did in Windows using WSL - https://developer.redis.com/create/windows/ 

* Install ioredis driver for nodejs pub/sub.
* npm i ioredis

## Start the Redis 
```
sudo service redis-server start
 ```

 ## Install nodejs

 ```
sudo apt install -y build-essential git nodejs npm
sudo npm i -g n
sudo n 16
sudo npm install -g yarn
 ```

# References
* https://stackoverflow.com/questions/6192177/redis-pub-sub-with-reliability 
* https://koalatea.io/python-redis-pubsub/ 
* React js - https://medium.com/@isaac.hookom/auto-refresh-data-for-react-functional-components-5eda19f912d1 
  
# Deploying
* Install pm2 - open source process manager for node.js application. 
* pm2 allows you to monitor and manage your application lifecycle in production.

## Install PM2 
* npm install -g pm2

```
pm2 --version
```

## For development 
```
pm2-dev 
```

## For the production
```
pm2 start --name <process_name> src/rest-server/src/index.js 
```
## monitoring metrics 
```
pm2 list
```

## Launching on System Startup
```
pm2 startup systemd

sudo systemctl enable pm2-<username>
```

## My command
```
sudo pm2 start index.js 
```

Reference - https://betterstack.com/community/guides/scaling-nodejs/pm2-guide/