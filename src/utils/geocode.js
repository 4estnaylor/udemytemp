const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiNGVzdG5heWxvciIsImEiOiJja2R6OGUzeGkzbDdrMnpxcXpnamp5bG1xIn0.g2BT8g3amegy_kObN5hvFw";

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("could not connect to geocode service", undefined);
    } else if (body.features.length === 0) {
      callback("could not find location, try another search.", undefined);
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
