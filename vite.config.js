require('dotenv').config()

module.exports = {
  // ...其他配置...
  plugins: [
    // ...其他插件...
    {
      configureServer: (server) => {
        return () => {
          server.middlewares.use((req, res, next) => {
            Object.assign(process.env, {
              // 将.env文件中的变量注入到 process.env 中
              ...require('dotenv').parsed
            })
            next()
          })
        }
      }
    }
  ]
}
