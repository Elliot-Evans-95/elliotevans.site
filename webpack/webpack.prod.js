'use strict';

const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath           = path.join(__dirname, './src');
const distPath          = path.join(__dirname, './dist');
const distCSS           = 'assets/styles/css/main.css';
const distIMG           = 'assets/styles/img';

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
    publicPath: '/'
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
        //CSS
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          'css-loader'
        ]
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    //Removes unwanted code AKA Tree Shaking
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    // Hot Module Reloading
    new webpack.NamedModulesPlugin()
  ],

  // DEV SERVER
  devServer: {
    contentBase: srcPath,
    historyApiFallback: { disableDotRule: true },
    compress: true,
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
