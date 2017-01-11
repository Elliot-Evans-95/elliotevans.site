'use strict';

// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const ExtractTextPlugin         = require("extract-text-webpack-plugin");


// Webpack Variables
const srcPath           = path.join(__dirname, './src');
const distPath          = path.join(__dirname, './dist');

module.exports = {
  context: srcPath,

  // SOURCEMAPS
  devtool: 'source-map',

  // START POINT OF BUNDLER
  entry: {
    app: './index.js',
    vendor: ['react']
  },

  // OUTPUT OF WEBPACK
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },

  // MODULES
  module: {

    rules: [
      {
        //HTML
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        // CSS MODULES
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader:'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        })

      },
      {
        // JS
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        // IMAGES
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=100000&name=./imgs/[hash].[ext]'
      }
    ]
  },

  // RESOLVE
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcPath
    ]
  },

  // PLUGINS
  plugins: [
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new ExtractTextPlugin({
      filename:'style.css',
      allChunks: true
    }),
    new webpack.NamedModulesPlugin()
  ],

  // DEV SERVER
  devServer: {
    contentBase: srcPath,
    historyApiFallback: { disableDotRule: true },
    compress: false,
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
};

