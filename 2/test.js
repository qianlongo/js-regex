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
{
  const string3 = '[JS] Lesson_04.mp4'
  console.log(string3.replace(/\b/g, '#'))
}
{
  const string4 = '[JS] Lesson_04.mp4'
  console.log(string4.replace(/\B/g, '#'))
}