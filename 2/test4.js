console.log('hello'.replace(/^|$/g, '#'))
console.log('hello'.replace(/(?=l)/g, '#'))
console.log('hello'.replace(/(?!l)/g, '#'))
console.log('hello'.replace(/(?<=l)/g, '#'))
console.log('hello'.replace(/(?<!l)/g, '#'))

const str = '123456789'

console.log(str.replace(/(?!^)(?=(\d{3})+$)/g, ','))