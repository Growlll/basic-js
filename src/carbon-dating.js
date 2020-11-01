const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  const num = arguments['0']
  if (typeof num !== 'string' || num === '' || !parseFloat(num)) return false
  const res = Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD))
  return res > 0 ? res : false
};
