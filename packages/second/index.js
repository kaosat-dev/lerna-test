console.log('i am package-b')

function extraFeat (a = 0, b = 2) {
  const c = 42
  return c * a * b
}
module.exports = {foo: 'sfsdfs', extraFeat}
