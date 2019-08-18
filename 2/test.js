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

{
  const string5 = 'hello'
  console.log(string5.replace(/(?=l)/g, '#'))
}

{
  const string6 = 'hello'
  console.log(string6.replace(/(?!l)/g, '#'))
}

{
  const string7 = 'hello'
  console.log(string7 === '' + 'h' + '' + 'e' + '' + 'l' + '' + 'l' + '' + 'o' + '')
  
  console.log(/^hello$/.test(string7))
  console.log(/^^hello$$/.test(string7))
  const result=/(?=he)^^he(?=\w)llo$\b\b$/.test("hello")
  console.log(result);
}