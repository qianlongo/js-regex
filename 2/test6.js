console.log('123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ','))
console.log('123456789 123456789'.replace(/(?!\b)(?=(\d{3})+\b)/g, ','))

function format(num) { 
  return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, "$ ")
}

console.log(format(1888))