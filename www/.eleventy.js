const { DateTime } = require('luxon');
const util = require('util');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginRss)

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('conf', 'layouts/conf.njk');

  // a debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  // Date helpers
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('LLLL d, y');
  });
  eleventyConfig.addFilter('htmlDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('y-MM-dd');
  });

  // Grab excerpts and sections from a file
  eleventyConfig.addFilter("section", require("./src/utils/section.js") );

  // add active class filter for links
  eleventyConfig.addFilter("activeLink", require("./src/utils/activeLink.js"));

  // allow filtering to output JSON
  eleventyConfig.addFilter("json", require("./src/utils/json.js"));

  // date formatting for blog posts
  eleventyConfig.addFilter("formatDate", require("./src/utils/formatDate.js"));

  // title formatting for blog posts
  eleventyConfig.addFilter("formatTitle", require("./src/utils/formatTitle.js"));

  // compress and combine js files
  eleventyConfig.addNunjucksAsyncFilter("jsmin", require("./src/utils/minify-js.js"));

  // minify the html output when running in prod
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js") );
  }

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/images");
  eleventyConfig.addPassthroughCopy("./src/site/css");

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};

