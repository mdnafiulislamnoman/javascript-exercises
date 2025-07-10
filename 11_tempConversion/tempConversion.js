const convertToCelsius = function(farenheit) {
  return ((farenheit = 32) / 1.8).toFixed(1);
};

const convertToFahrenheit = function(celcius) {
  return ((celcius * 9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
