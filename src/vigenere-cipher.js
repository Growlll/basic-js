const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = 'true') {
    this.mode = mode
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = key.length; i < message.length; i++) {
      key += key
    }
    let res = ''
    let pos = 0

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i)
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65
        let charCodeEncrypted = key.charCodeAt(pos) - 65
        let resCharCode = ((charCode + charCodeEncrypted) % 26) + 65
        res += String.fromCharCode(resCharCode)
        pos++
      } else {
        res += message[i]
      }
    }

    if (!this.mode) return res.split('').reverse().join('')
    return res
  }


  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error()
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    for (let i = key.length; i < encryptedMessage.length; i++) {
      key += key
    }
    let res = ''
    let position = 0

    for (let i = 0; i < encryptedMessage.length; i++) {
      let charCode = encryptedMessage.charCodeAt(i)
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65
        let charCodeEncrypted = key.charCodeAt(position) - 65
        let resCharCode = ((charCode + 26 -  charCodeEncrypted) % 26) + 65
        res += String.fromCharCode(resCharCode)
        position++
      } else {
        res += encryptedMessage[i]
      }
    }

    if (!this.mode) return res.split('').reverse().join('')
    return res
  }
}

module.exports = VigenereCipheringMachine;
