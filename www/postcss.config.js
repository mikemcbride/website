const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/site/**/*.njk',
    './src/site/_includes/js/checkDarkMode.js',
    './src/site/utils/activeLink.js'
  ],
  whitelistPatternsChildren: [/prose/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss,  require('cssnano')] : []
  ]
};
