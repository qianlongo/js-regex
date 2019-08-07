const utils = require('../utils')

{
  const string = 'hello'
  const regexp = /^|$/g

  console.log(string.replace(regexp, '#'))
}

{
  const string = 'I\nlove\njavascript'
  const regexp = /^|$/gm

  console.log(string.replace(regexp, '#'))
}