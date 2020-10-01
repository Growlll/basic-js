const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let catsCount = 0
  arguments[0].forEach(e => e.forEach(el => el === '^^' ? catsCount++ : catsCount))
  return catsCount
};
