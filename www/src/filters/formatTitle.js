const title = require('title')

module.exports = function (val) {
  return title(val, {
    special: ['AngularJS', 'iOS', 'macOS', 'iPhone', 'iPad', 'tvOS']
  })
}