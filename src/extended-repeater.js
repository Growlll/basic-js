const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  const str = String(arguments['0'])
  const options = arguments['1']
  const repeat = options.repeatTimes || 1
  const separator = options.separator || '+'
  const addition = (options.addition === false || options.addition === null) ? String(options.addition) : options.addition || ''
  const additionSeparator = options.additionSeparator || ''
  const additionRepeat = options.additionRepeatTimes || 1

  let res = ''
  for (let i = 0; i < repeat; i++) {
    res += `${str}`

    if (addition !== '') {
      for (let k = 0; k < additionRepeat; k++) {
        if (
          (k + 1) === additionRepeat
          && (i + 1) !== repeat
        ) {
          res += `${addition}${separator}`
        } else {
          if ((k + 1) === additionRepeat && (i + 1) === repeat) {
            res += `${addition}`
          } else {
            res += `${addition}${additionSeparator}`
          }
        }
      }
    } else {
      if ((i + 1) !== repeat) res += `${separator}`
    }
  }

  // str > add > 8x....
  // str > add > addSep > add > addSep > ...

  return res
}


// repeater('la', { repeatTimes: 3, separator: 's' }), 'laslasla'