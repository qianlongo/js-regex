const utils = require('../utils')

utils.console('dsfsdf4546', /\w/)
utils.console('123123', /\d{3,19}/)
utils.console('12 312 3223 22222', /\d{2,5}?/g, 'match')

//? 获取数组中元素前两位是数字的和
const calc = (array) => {
  const regexp = /^\d{2}/
  const newArray = array.filter((it) => regexp.test(it)).map((it) => ~~String(it).match(regexp)[0])

  return newArray.reduce((result, it) => result += it, 0)
}

console.log(calc([ 1324, 324324, 'dsfsd', '1232dsf' ]))