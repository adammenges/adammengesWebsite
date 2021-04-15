import path from 'path'
import axios from 'axios'

export default {
  siteRoot: 'https://adammenges.com',
  basePath: '/',
  getRoutes: async () => {
    console.log('getRoutes')
    console.log('getRoutes')
    console.log('getRoutes')
    console.log('getRoutes')
    console.log('getRoutes')
    return [
      {
        path: 'portfolio',
        template: 'src/Portfolio.js',
        // getData: async () => ({
        //   portfolio,
        // }),
      },

      // A 404 component
      {
        path: '404',
        template: 'src/404',
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
