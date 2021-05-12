class MyPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('MyPlugin', (compilation) => {
      // console.log('thisCompilation 初始化 compilation 时调用，在触发 compilation 事件之前调用')
      compilation.hooks.buildModule.tap('SourceMapDevToolModuleOptionsPlugin', module => {
        if (/\.(jpe?g|png)$/.test(module.rawRequest)) {
          return
        }
        if (module.loaders) {
          module.loaders.push({
            loader: __dirname + '/element-rendering-webpack-loader.js'
          })
        }
      })
    })
  }
}

module.exports = MyPlugin