function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

const merged = merge({ x: 1 }, { x: 2, y: 2 }, { x: 3, y: 3, z: 3 });
// { x: 1, y: 2, z: 3 }
console.log(merged);