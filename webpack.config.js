'use strict';

// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');

// Webpack Variables
const srcPath                   = path.join(__dirname, './src');
const srcEntry                  = path.join(__dirname, './src/index.js');
const distPath                  = path.join(__dirname, './dist');

// @todo::
// I18nPlugin
// UglifyJsPlugin
// Use postcss plugins
// Might need ExtractTextPlugin

module.exports = {
  context: srcPath,

  // SOURCEMAPS
  devtool: 'cheap-source-map',

  // START POINT OF BUNDLER
  entry: {
    app: srcEntry,
    vendor: 'angular'
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
        loader: 'html-loader'
      },
      {
        // CSS
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'style-loader' 
          },
          {
            loader: 'css-loader?importLoaders=1'
          },
          {
            loader:'postcss-loader',
            options: { 
              config: 'postcss.config.js' 
            }
          }
        ]
      },
      {
        // JS
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:
        {
          presets:['es2015']
        }
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
    extensions: ['.js', '.css', '.png', 'jpg'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcPath
    ]
  },

  // performance
  performance: {
    hints: "warning",
  },

  // the environment in which the bundle should run
  target: "web",

  // PLUGINS
  plugins: [
    // Define env
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // SETS SKELETON HTML PATH. Adds in script tags and other to HTML
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: srcPath + '/index.html',
      inject: 'body'
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false,
    }),
    // Code Spitting. manifest is there due to: https://webpack.js.org/guides/code-splitting-libraries/
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
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

// Logs what ENV is running
if (process.env.NODE_ENV !== 'production')
    console.log('Development')
if (process.env.NODE_ENV == 'production')
    console.log('Production')
