# External npm modules

## expressjs  - https://expressjs.com/
## npm init -y 

## npm i express@4.16.4

## To start nodemon src/app.js 

## Check the URL 
### http://localhost:3000/


## Dynamic pages with templating
### hbs - it uses https://www.npmjs.com/package/hbs - handlebars view engine used by express.js

## Install hbs - i.e. handlebars view engine.
### npm i hbs@4.0.1

## Nodemon to monitor handlebar files i.e. hbs files.
### nodemon src/app.js -e js,hbs

## Deploy the application on Heroku - Paas - Platform as a service.

## Install the heroku cli tools

### https://devcenter.heroku.com/articles/heroku-cli 

## Check Heroku is working or not - restart the vs code so that terminal is refreshed.
### $ heroku -v
###  heroku/7.53.0 win32-x64 node-v12.21.0

## login to heroku from terminal
### heroku login 
#### 

## Add keys to heroku
### heroku keys:add

## create app - give unique name i.e. unique within all the heroku accounts.
### heroku create jshreyas-weather-application
#### https://jshreyas-weather-application.herokuapp.com/ | https://git.heroku.com/jshreyas-weather-application.git

## Inside package.json - add the start so that heroku knows how to start the app.
###   "start": "node src/app.js"
### test this using npm run <script name>
### npm run start