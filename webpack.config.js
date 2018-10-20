const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const keys = require('./keys')

const config = {
  entry: {
    polyfills: './src/polyfills.js',
    app: './src/index.js'
  },
  devServer: {
    compress: true,
    hot: true,
    port: 8000,
    historyApiFallback: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: false
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: false
    }),
    new webpack.DefinePlugin(keys),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
