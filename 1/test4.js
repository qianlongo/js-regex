const utils = require('../utils')
const regex = /^(0?\d|1\d|2[0-3]):(0?\d|[1-5]\d)$/

utils.console('23:59', regex)
utils.console('10:11', regex)
utils.console('7:2', regex)
utils.console('07:02', regex)

const checkTime = (str) => {
  if (str[0] === 0) {
    str[1] === '数字'
  }
}