const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  if (!Array.isArray(arguments['0'])) throw new Error()

  const arr = arguments['0']
  let res = []
  for (let i = 0; i < arr.length; i++) {
      switch(arr[i]) {
        case '--discard-next':
          i++
          break
        case '--discard-prev':
          if (i >= 1 && arr[i - 2] !== '--discard-next') res = res.slice(0, -1)
          break
        case '--double-next':
          if (arr[i + 1] !== undefined) res.push(arr[i + 1])
          break
        case '--double-prev':
          if (i >= 1 && arr[i - 2] !== '--discard-next') res.push(arr[i - 1])
          break
        default:
          res.push(arr[i])
      }
  }
  return res
};
