const utils = require('../utils')

utils.console('ab abb abbb', /[(ab)]{2,}/g, 'match')
utils.console('12 123 1234 12345', /\d{2,5}?/g, 'match')
utils.console('#ddd456', /#([0-9a-zA-Z]{6}|[0-9a-zA-Z]{3})/)
console.log('hello'.replace(/^|$/g, '#'))
console.log('hello'.replace(/(?=l)/g, '#'))
console.log('hello'.replace(/(?!l)/g, '#'))

console.log('123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ','))
utils.console('a1b a2b a3b ab', /a[123]*b/g, 'match')