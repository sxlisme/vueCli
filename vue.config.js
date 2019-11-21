module.exports = {
  devServer: {
    https:false,    
    proxy: {
      '/api': {
        target: 'http://localhost:8456/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }

      }
    }

  }
}
