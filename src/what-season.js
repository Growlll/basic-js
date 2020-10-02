const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  if(arguments.length === 0) return 'Unable to determine the time of year!'
  let month
  if(!(arguments[0] instanceof Date)) throw new Error('THROWN').message
  month = new Date(arguments[0].valueOf()).getMonth() + 1

  let season
  switch(true) {
    case month <= 2 || month === 12:
      season = 'winter'
      break;
    case month <= 5:
      season = 'spring'
      break;
    case month <= 8:
      season = 'summer'
      break;
    case month <= 11:
      season = 'autumn'
      break;
    default:
      season = 'Unable to determine the time of year!'
  }
  return season
};
