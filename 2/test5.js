const formatPrice = (price) => {
  return price.match(/(\d+)\.(\d+)/)
}

console.log(formatPrice('123.00'))

console.log((123456789.123).toLocaleString('en-US'))