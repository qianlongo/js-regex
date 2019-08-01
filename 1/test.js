{

  const regex = /ab{1,5}c/g
  const string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
  // 横向匹配
  console.log(string.match(regex))

}


{

  const regex = /a[123]b/g
  const string = 'a0b a1b a2b a3b a4b a5b'

  // 众向匹配
  console.log(string.match(regex))
}