const render = (template, data) => {
  // \s*?是为了兼容{{name}} {{ name }}这种写法
  return template.replace(/{{\s*?(\w+)\s*?}}/g, (match, key) => {
    // 匹配中了则读取替换，否则替换为空字符串
    return key && data.hasOwnProperty(key) ? data[key] : ''
  })
}
const data = {
  name: 'sam',
  age: 34
}
const template = "我是: {{ name }}，年龄是: {{ age }}，性别是： {{gender}}"
console.log(render(template, data))