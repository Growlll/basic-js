const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  const diskNumber = arguments['0']
  const turnsSpeed = arguments['1']

  const turns = (2 ** diskNumber) - 1
  const seconds = Math.floor((turns / turnsSpeed) * 60 * 60)
  return {turns, seconds}
};
