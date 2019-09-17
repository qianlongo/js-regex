const trim = (str) => {
  return str.replace(/^\s+|\s+$/,'')
}

const trim2 = (str) => {
  return str.replace(/^\s+(.*?)\s+$/, '$1')
}

console.log('  1223  ', '\n', trim('  1223  '))
console.log('  1223  ', '\n', trim2('  1223  '))