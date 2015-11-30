var StaticRenderPlugin = require('static-render-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var routes = [
  '/',
];

module.exports = {
  entry: {
    'bundle': ['./src/index.js'],
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new StaticRenderPlugin('bundle.js', routes),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'react-hot!babel'},
      { test: /\.s?css$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.png$/, loader: 'url?mimetype=image/png' },
    ]
  }
};
