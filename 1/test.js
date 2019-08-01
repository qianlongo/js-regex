const regex = /ab{1,5}c/g
const string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'

console.log(string.match(regex))