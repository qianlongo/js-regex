{
  console.log(/[0-9a-zA-Z]{6,12}/.test('123422f'))
  console.log(/([0-9][a-z]){6,12}/g.test('1234a2'))
}