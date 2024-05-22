const path = require('path')
const proxyUrl = 'http://localhost:8080'
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  // webpack 配置
  webpack: {
    // 路径别名
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@utils': pathResolve('src/utils'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@sass': pathResolve('src/assets/styles'),
    },

    // 修改打包后的目录
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve(__dirname, 'dist')
      paths.appBuild = path.resolve(__dirname, 'dist')
      return webpackConfig
    },
  },
  devServer: {
    // 请求代理
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
