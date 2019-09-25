const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const forecastUrl =
    'https://api.darksky.net/forecast/b0323a77e81092ee95f69599c24e3353/' +
    latitude +
    ',' +
    longitude +
    '?units=si';

  request({ url: forecastUrl, json: true }, (error, response) => {
    if (error) {
      callback(error);
    } else if (response.body.error) {
      callback(response.body.error);
    } else {
      callback(undefined, response.body.currently);
    }
  });
};

module.exports = forecast;
