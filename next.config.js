module.exports = {
    target: 'serverless',
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
