const fs = require("fs");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const format = require("date-fns/format");
const anchors_plugin = require('@orchidjs/eleventy-plugin-ids');

module.exports = function (eleventyConfig) {

    if (process.env.ELEVENTY_PRODUCTION) {
        eleventyConfig.addTransform("htmlmin", htmlminTransform);
    } else {
        eleventyConfig.setBrowserSyncConfig({ callbacks: { ready: browserSyncReady } });
    }

    // Collections
    eleventyConfig.addCollection("publishedPosts", function (collectionApi) {
        const posts = collectionApi.getFilteredByTag("post");
        // filter out posts where published is explicitly false.
        // if it's undefined, we'll assume it should be published.
        const filtered = posts.filter(p => p.data.published !== false);
        return filtered.map(post => {
            post.data.formattedDate = format(new Date(post.data.date), 'PP');
            return post;
        }).reverse();
    });

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(anchors_plugin);

    // Filters
    eleventyConfig.addLiquidFilter('dateToRfc3339', pluginRss.dateToRfc3339);
    eleventyConfig.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate);

    // Passthrough
    eleventyConfig.addPassthroughCopy({ "src/static": "." });

    // Watch targets
    eleventyConfig.addWatchTarget("./src/styles/");

    var pathPrefix = "";
    if (process.env.GITHUB_REPOSITORY) {
        pathPrefix = process.env.GITHUB_REPOSITORY.split('/')[1];
    }

    return {
        dir: {
            markdownTemplateEngine: 'njk',
            dataTemplateEngine: 'njk',
            htmlTemplateEngine: 'njk',
            input: "src"
        },
        pathPrefix
    }
};

function browserSyncReady(err, bs) {
    bs.addMiddleware("*", (req, res) => {
        const content_404 = fs.readFileSync('_site/404.html');
        // Provides the 404 content without redirect.
        res.write(content_404);
        // Add 404 http status code in request header.
        // res.writeHead(404, { "Content-Type": "text/html" });
        res.writeHead(404);
        res.end();
    });
}

function htmlminTransform(content, outputPath) {
    if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        });
        return minified;
    }
    return content;
}
