const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  return ((arguments !== 'undefined' &&  Array.isArray(arguments[0])) ? arguments[0].filter(e => typeof e === 'string').map(e => e.trim()[0].toUpperCase()).sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') : false)
};
