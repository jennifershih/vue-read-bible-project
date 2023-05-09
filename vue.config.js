import module from './module'

module.exports = {
  publicPath: './',
  base: '/vue-read-bible-project/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://bible-api.com',
        changeOrigin: true,
        headers: {
          Origin: 'http://localhost:5173'
        },
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
