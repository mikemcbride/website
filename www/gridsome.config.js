const marked = require('marked')
const formatTitle = require('./src/filters/formatTitle')

module.exports = {
    siteName: 'Mike McBride',
    siteUrl: 'https://mikemcbride.dev',
    siteDescription: 'Personal website of Mike McBride',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'writing/**/index.md',
                typeName: 'BlogPost',
                remark: {
                    plugins: [
                        '@gridsome/remark-prismjs'
                    ]
                }
            }
        },
        {
            use: 'gridsome-plugin-feed',
            options: {
                contentTypes: ['BlogPost'],
                feedOptions: {
                    title: "Mike McBride",
                    description: 'Sometimes Mike writes things. You can read them here.'
                },
                rss: {
                    enabled: true,
                    output: '/feed.xml'
                },
                atom: {
                    enabled: true,
                    output: '/feed.atom'
                },
                json: {
                    enabled: true,
                    output: '/feed.json'
                },
                filterNodes: node => node.published === true,
                nodeToFeedItem: node => ({
                    title: formatTitle(node.title),
                    date: node.date || node.fields.date,
                    content: marked(node.content)
                })
            }
        }
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require('tailwindcss')()]
            }
        }
    }
}
