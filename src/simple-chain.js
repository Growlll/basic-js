const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let res = ''
    this.chain.map(el => res += `( ${el} )~~`)
    this.chain = []
    return res.slice(0, -2)
  }
};

module.exports = chainMaker;
