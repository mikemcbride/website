const { minify } = require('terser')

module.exports = async function(code) {
  try {
    let minified = await minify(code, { ecma: 2018 })
    return minified.code
  } catch (err) {
    console.log('Terser error:', err)
    return code
  }  
}
