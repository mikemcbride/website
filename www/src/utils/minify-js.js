const { minify } = require('terser')

module.exports = function(code, cb) {
  minify(code).then(res => {
    cb(null, res.code)
  }).catch(err => {
    cb(err)
  }) 
}
