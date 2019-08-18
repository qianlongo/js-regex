{
  const getQueryStringByName = (search, name) => {
    const result = search.match(new RegExp(`[?&]${name}=([^\&]+)`, 'i'))
    console.log(result, RegExp.$1)
  }

  getQueryStringByName('?a=1&a=2', 'a')
}
{
  const regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
  console.log(regex.test('2017-06-12'))
  console.log(regex.test('2017/06/12'))
  console.log(regex.test('2017.06.12'))
  console.log(regex.test('2017-06/12'))
  console.log('------')
}
{
  const regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/
  console.log(regex.test('2017-06-12'))
  console.log(regex.test('2017/06/12'))
  console.log(regex.test('2017.06.12'))
  console.log(regex.test('2017-06/12'))
  console.log('------')
}

{
  const regex = /^((\d)(\d(\d)))\1\2\3\4$/
  const string = '1231231233'

  console.log(regex.test(string))
  console.log(RegExp.$1)
  console.log(RegExp.$2)
  console.log(RegExp.$3)
  console.log(RegExp.$4)
}

{
  const regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/
  const string = '123456789# ######'

  console.log(regex.test(string))
}

{
  const regex = /(\d)+/
  const string = '12345'

  console.log(string.match(regex))
  console.log('-------')
}

{
  const regex = /(\d+) \1/

  console.log('12345'.match(/(\d+)/))
  console.log(regex.test('12345 12345'))
  console.log(regex.test('12345 1'))
  console.log('-------')
}

{
  const regex = /(?:\d) (\w) \1/
  
  console.log('123 h helloh'.match(regex))
}


{
  const trim = (str) => {
    return str.replace(/^\s+|\s+$/g, '')
  }
  const trim2 = (str) => {
    return str.replace(/^\s*(.*?)\s*$/g, '$1')
  }

  const string = '  foobar   '
  console.log(trim(string), trim(string).length)
  console.log(trim2(string), trim2(string).length)
}

{

  const titleize = (str) => {
    // 1
    // return str.replace(/\w+/g, (match) => {
    //   return match[0].toUpperCase() + match.slice(1)
    // })
    // 2
    return str.replace(/(^|\s)\w/g, (c) => c.toUpperCase())
  }

  const string = 'my  name is epeli'

  console.log(titleize(string))
}

{
  const camelize = (str) => {
    return str.replace(/[_-\s]+(\w)/g, (match, c) => {
      return c ? c.toUpperCase() : ''
    })
  }

  console.log(camelize('-moz-transform '))
}


{
  const dasherise = (str) => {
    return str.replace(/([A-Z])/g, '-$1').replace(/[_-\s]+/g, '-').toLowerCase()
  }

  console.log(dasherise('MozTransform'))
}