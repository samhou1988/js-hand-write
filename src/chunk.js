// function chunk(arr, size) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     const chunk = arr.slice(i, i + size);
//     res.push(chunk);
//   }
//   return res;
// }

function chunk(arr, size) {
  if (size <= 0) {
    return arr;
  }
  const firstChunk = arr.slice(0, size);
  if (!firstChunk.length) {
    return arr;
  }

  return [firstChunk].concat(chunk(arr.slice(size, arr.length), size));
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunk(arr, -3));
