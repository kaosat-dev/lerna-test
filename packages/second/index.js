console.log('i am package-b')

/**
 * someStuff - description
 *
 * @param  {type} bla description
 * @param  {type} bli description
 * @param  {type} blo description
 * @return {type}     description 
 */
function someStuff (bla, bli, blo) {
  console.log('i do only side effects')

  return bla * 42
}

module.exports = {foo: 'sfsdfs', someStuff}
