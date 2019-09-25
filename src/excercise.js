const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log('Error message: ', error);
  }

  forecast(
    latitude,
    longitude,
    (error, { temperature, humidity, pressure }) => {
      if (error) return console.log(error);
      console.log(
        `Here are the current weather data for the location ${chalk.blue.inverse(
          location
        )} `
      );
      console.log(`temperature: `, temperature);
      console.log(`humidity: `, humidity);
      console.log(`pressure: `, pressure);
    }
  );
});
