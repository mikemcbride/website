const { DateTime } = require('luxon')

module.exports = function (val) {
  let d = new Date(val)
  return DateTime.fromJSDate(d).toFormat('DDDD')
}
