# element-rendering-webpack-plugin

根据资源类型添加一个 loader ，用来满足捕获 div 的渲染时间

## Install

```js
npm install --save-dev element-rendering-webpack-plugin element-rendering-webpack-loader
```

## Example

```js
// webpack.config.js

const ElementRenderingWebpackPlugin = require('element-rendering-webpack-plugin')

module.exports = {
  plugins: [
    new ElementRenderingWebpackPlugin()
  ]
}

```
