// console.log(/.^/.test('a'))
{
  console.log('12345678'.replace(/\d{3}$/g, '#'))
  console.log('goodbye'.match(/good|goodbye/g))
}
{
  const string = '123456789'
  console.log(string.replace(/(?!^)(?=(\d{3})+$)/g, ','))
}
