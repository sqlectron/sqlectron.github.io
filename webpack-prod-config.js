var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticRenderPlugin = require('static-render-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var routes = [
  '/',
];

module.exports = {
  entry: {
    'dist/bundle': './src/index.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass?includePaths[]='+ path.resolve(__dirname, 'node_modules')) },
      { test: /\.png$/, loader: 'url?mimetype=image/png' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new StaticRenderPlugin('dist/bundle.js', routes),
    new ExtractTextPlugin('dist/style.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
