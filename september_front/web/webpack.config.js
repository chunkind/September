const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-react'],
      plugins: ['react-native-web']
    }
  }
};

const fileLoaderConfiguration = {
  test: /\.(jpg|jpeg|gif|png)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      publicPath: 'images',
      outputPath: 'images',
    }
  }
}

module.exports = {
  entry: [
    path.resolve(appDirectory, 'index.web.js')
  ],
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist')
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      fileLoaderConfiguration
    ]
  },

  plugins:[new HtmlWebpackPlugin({ template: './public/index.html'})],

  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: [ '.web.js', '.js' ]
  }
}