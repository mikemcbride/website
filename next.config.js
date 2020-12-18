module.exports = {
    target: 'serverless',
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        })
        config.node = {
            fs: 'empty'
        }
        return config
    }
}
