const withPreact = require('next-plugin-preact')

module.exports = withPreact({
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    }
})
