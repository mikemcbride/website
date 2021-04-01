module.exports = {
    target: 'serverless',
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        config.node = {
            fs: 'empty'
        }
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            })
        }
        return config
    }
}
