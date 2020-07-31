const title = require('title')

module.exports = function (str) {
  console.log('str:', str)
  return str
  // return title(str, {
  //   special: ['AngularJS', 'iOS', 'macOS', 'iPhone', 'iPad', 'tvOS']
  // })
}