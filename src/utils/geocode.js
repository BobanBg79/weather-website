const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiZnJvbnRtYW4iLCJhIjoiY2swejMwd25sMDU3ZzNqb2t2OWl5bDd5ayJ9.ur34vUaJmZ19sFmftQz6Vg&limit=1';

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback(error);
    } else if (body.features.length === 0) {
      callback(
        'We could not find any location matching your search criteria, please try another search'
      );
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
