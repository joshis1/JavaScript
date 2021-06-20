"use strict";

function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this.__temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
      return this.__temperature;
  },
  set: function(value) {
      this.__temperature = (value - 273.15).toFixed(2);
  }
});
