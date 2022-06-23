"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector("#city");

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
//var weatherDescription= document.querySelector('#weatherDescription');

var weatherTemperature = document.querySelector('.weatherTemperature');

var localWeatherBox = document.querySelector('#local-weather');
var currentCity = localWeatherBox.firstElementChild;
var current_temperature = localWeatherBox.children[1];
var weatherIcon = document.querySelector('#weatherIcon');

var locationIcon = document.querySelector('.weather-icon');

var degreeSection = document.querySelector('.degree-section');

var temperatureSpan = document.querySelector('.degree-section span');
//console.log(temperatureSpan);