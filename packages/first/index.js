console.log('i am package-a')

function computeNormals (meshData) {
  return meshData * 2
}

module.exports = {foo: 42, bar: 'dsf', computeNormals}
