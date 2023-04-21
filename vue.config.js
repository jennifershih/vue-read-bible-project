import module from './module'

module.exports = {
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
