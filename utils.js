module.exports = {
  console (string, regexp, method = 'test') {
    const regexpMethods = [ 'exec', 'test' ]
    const result = regexpMethods.includes(method) ? regexp[ method ](string) : string[ method ](regexp)

    console.log(result)

    return result
  }
}