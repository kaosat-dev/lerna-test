console.log('i am package-b')

function someStuff (bla, bli, blo) {
  console.log('i do only side effects')

  return bla * 42
}

module.exports = {foo: 'sfsdfs', someStuff}
