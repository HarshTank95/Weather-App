const reqst = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=59af8d0ce7d061b564399504fdf4a22a&query=${latitude},${longitude}`;

  const urldata = { url, json: true };

  reqst(urldata, (err, {} = {}, { error, current } = {}) => {
    if (err) {
      callback(`unable to load url please try again later `, undefined);
    } else if (error) {
      callback(`please enter valid address`, undefined);
    } else {
      callback(undefined, current);
    }
  });
};

module.exports = forecast;

// reqst(urldata, (error, response, body) => {
//   if (error) {
//     callback(`unable to load url please try again later `, undefined);
//   } else if (body.error) {
//     callback(`please enter valid address`, undefined);
//   } else {
//     callback(undefined, body.current);
//   }
// });
