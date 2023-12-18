const reqst = require("request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const city = process.argv[2];

if (city) {
  geocode(city, (error, { lon, lat } = {}) => {
    if (error) return console.log(error);

    console.log(`Longitude :- ${lon} , Latitude :- ${lat}`);

    forecast(lat, lon, (error, { weather_descriptions, temperature, feelslike }) => {
      if (error) return console.log(error);

      console.log(`${weather_descriptions[0]}. temperature is ${temperature} but it feels like ${feelslike}`);
    });
  });
} else {
  console.log(`Please provide the location for weather update`);
}
