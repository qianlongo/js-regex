{
  const getQueryStringByName = (search, name) => {
    const result = search.match(new RegExp(`[?&]${name}=([^\&]+)`, 'i'))
    console.log(result, RegExp.$1)
  }

  getQueryStringByName('?a=1&a=2', 'a')
}