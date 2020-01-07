module.exports = {
  siteName: 'Mike McBride',
  siteUrl: 'https://mikemcbride.me',
  siteDescription: 'Personal website of Mike McBride',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        pathPrefix: '/blog',
        path: 'blog/**/index.md',
        typeName: 'BlogPost'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
       shouldPurge: true,
       shouldImport: true,
       shouldNest: true,
       shouldAutoprefix: true,
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['BlogPost'],
        feedOptions: {
          title: "Mike McBride's Blog",
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
        }
      }
    }
  ]
}
