const title = require('title')

module.exports = function (str) {
  return title(str, {
    special: ['AngularJS', 'iOS', 'macOS', 'iPhone', 'iPad', 'tvOS']
  })
}