const reqst = require("request");

const geocode = (address, callback) => {
  const geocodeUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=89356d984b9647749fa775ff6012cbbb`;

  const urldata = { url: geocodeUrl, json: true };

  reqst(urldata, (err, {} = {}, { error, features } = {}) => {
    if (err) {
      callback(`unable to load url please try again later`, undefined);
    } else if (error) {
      callback(`please enter valid address`, undefined);
    } else {
      const resfilter = features[0].properties;
      callback(undefined, resfilter);
    }
  });
};

module.exports = geocode;
