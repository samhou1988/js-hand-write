function camelCase(snakeCase) {
  return snakeCase.replace(/-(\w*)/ig, function replacer(match, p1) {
    return p1.charAt(0).toUpperCase() + p1.slice(1)
  })

}

// get-element-by-id
// getElementById
console.log(camelCase('get-element-by-id'))