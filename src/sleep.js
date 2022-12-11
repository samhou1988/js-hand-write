function sleep(delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, delay)
  })
}

+(async function () {
  console.log('start')
  await sleep(10000)
  console.log('end 10000ms')
})();