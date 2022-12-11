function dom2json(rootNode) {
  if (!rootNode) {
    return null;
  }

  let root = {
    tagName: rootNode.tagName.toLowerCase(),
    children: [],
  }

  const children = rootNode.children;
  if (children.length) {
    Array.from(children).map(child => {
      root.children.push(dom2json(child))
    })
  }
  console.log(root)
  return root;
}

dom2json(document.querySelector('#root'))