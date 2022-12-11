function camelCase(snakeCase) {
  return snakeCase.replace(/-\w/, function (match, dd) {
    console.log(match, dd)
    return dd
  })

}

// get-element-by-id
// getElementById
camelCase('get-element-by-id')