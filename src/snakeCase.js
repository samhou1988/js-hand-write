function snakeCase(camelCase) {
  return camelCase.replace(/[A-Z]/g, function replacer(match) {
    return '_' + match.toLowerCase();
  })

}

// get-element-by-id
// getElementById
console.log(snakeCase('getElementById'))