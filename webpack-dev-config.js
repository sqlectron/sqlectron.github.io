var StaticRenderPlugin = require('static-render-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var routes = [
  '/',
];

module.exports = {
  entry: {
    'bundle': ['./src/index.js'],
    'hot': [
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StaticRenderPlugin('bundle.js', routes),
    new webpack.HotModuleReplacementPlugin(),
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
