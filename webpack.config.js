// switch (process.env.NODE_ENV) {
//   case 'prod':
//   case 'production':
//     module.exports = require('./webpack/webpack.prod')({env: 'production'});
//     break;
//   case 'test':
//   case 'testing':
//     module.exports = require('./webpack/webpack.test')({env: 'test'});
//     break;
//   case 'dev':
//   case 'development':
//   default:
//     module.exports = require('./webpack/webpack.dev')({env: 'development'});
// }

'use strict';

// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const ExtractTextPlugin         = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

// Custom Require
const data              = require('./route.ts');

// Webpack Variables
const srcPath           = path.join(__dirname, './src');
const distPath          = path.join(__dirname, './dist');

module.exports = {
  context: srcPath,

  // SOURCEMAPS
  devtool: 'source-map',

  // START POINT OF BUNDLER
  entry: {
    app: './app.tsx',
    vendor: ['react']
  },

  // OUTPUT OF WEBPACK
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
    // Needed for Static Generator
    libraryTarget: 'umd'
  },

  // MODULES
  module: {

    rules: [
      {
        //HTML
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        // CSS MODULES
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        )
      },
      {
        // JS
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        // TYPESCRIPT
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcPath
    ]
  },

  // EXTERNALS
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  // PLUGINS
  plugins: [
    // Common files -> vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin('main', route.routes, data),
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

