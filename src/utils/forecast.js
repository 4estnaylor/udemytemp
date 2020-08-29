request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=201e86e122d55f39f531c5248772cc2a&query=" +
    latitude +
    "," +
    longitude +
    "&units=f&limit=1";

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("unable to connect to forecast service", undefined);
    } else if (body.error) {
      callback("could not find location for forecast, try again.", undefined);
    } else {
      callback(
        undefined,
        "The temperature is " +
          body.current.temperature +
          " deg F. It feels like " +
          body.current.feelslike +
          " deg F. Weather: " +
          body.current.weather_descriptions[0]
      );
    }
  });
};

module.exports = forecast;
