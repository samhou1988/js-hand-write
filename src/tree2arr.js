function tree2arr(tree, res = []) {
  return tree.reduce((acc, curr) => {
    const children = curr.children
    delete curr.children;
    if (children.length) {
      return tree2arr(children, acc.concat([curr]))
    }
    return acc.concat([curr])
  }, res)
}

const tree = [
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]

console.log(JSON.stringify(tree2arr(tree), null, 2))