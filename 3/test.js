{
  const string = 'ababa abbb ababab'
  const regex = /(ab)+/g

  console.log(string.match(regex))
}
{
  const regex = /^I love (JavaScript|Regular Expression)$/
  console.log(regex.test('I love JavaScript'))
  console.log(regex.test('I love Regular Expression'))
}
{
  const string = '2019-08-22'
  const regex = /(\d{4})-(\d{2})-(\d{2})/
  const result = string.match(regex)

  console.log(result[1], result[2], result[3])
  console.log(RegExp.$1, RegExp.$2, RegExp.$3)
}

{
  const string = '2019-08-22'
  const regex = /(\d{4})-(\d{2})-(\d{2})/

  console.log(string.replace(regex, '$1/$2/$3'))
  console.log(string.replace(regex, (match, year, month, day) => `${year}/${month}/${day}`))
  console.log(string.replace(regex, (match, year, month, day) => `${RegExp.$1}/${RegExp.$2}/${RegExp.$3}`))
}