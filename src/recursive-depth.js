const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let counter = 1
    let depth = 0
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        depth = this.calculateDepth(el) + 1
        if (depth > counter) counter = depth
      }
    })
    return counter
  }
};