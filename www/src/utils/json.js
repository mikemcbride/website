module.exports = function(obj) {
  return Object.keys(obj).toString()
  return JSON.stringify(obj, null, 2)
}
