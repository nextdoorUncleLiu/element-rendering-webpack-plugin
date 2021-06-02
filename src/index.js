class MyPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      // console.log('thisCompilation 初始化 compilation 时调用，在触发 compilation 事件之前调用')
      compilation.hooks.buildModule.tap('SourceMapDevToolModuleOptionsPlugin', module => {
        if (module.resource) {
          if (/(\.((j|t)sx?)$)/.test(module.resource) && 
          !/node_modules/.test(module.resource)) {
            if (module.loaders) {
              module.loaders.push({
                loader: 'element-rendering-webpack-loader'
              })
            }
          }
        }
      })      
    })  
  }
}

module.exports = MyPlugin