module.exports = {
  siteName: 'Mike McBride',
  siteUrl: 'https://mikemcbride.me',
  siteDescription: 'Personal website of Mike McBride',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/index.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    },
    { use: 'gridsome-plugin-purgecss' },
    { use: 'gridsome-plugin-tailwindcss' }
  ]
}
