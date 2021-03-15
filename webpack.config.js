const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const entry = {
  bundle: './src/index.js',
};
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
  }),
  new HtmlWebPackPlugin({
    template: './src/index.html',
  }),
];

if (isDev) {
  entry.hot = [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ];
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
  );
}
else {
  plugins.push(
    new MiniCssExtractPlugin(),
  );
}

const webpackConfig = {
  mode: isDev ? 'development' : 'production',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      }
    ]
  }
};

if (isDev) {
  webpackConfig.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 4000,
    hot: true
  };
}

module.exports = webpackConfig;
