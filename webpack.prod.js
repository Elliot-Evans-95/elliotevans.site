// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');

// Webpack Variables
const srcPath                   = path.join(__dirname, './src');
const srcEntry                  = path.join(__dirname, './src/index.js');
const distPath                  = path.join(__dirname, './dist');

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
              config: './config/postcss.config.js' 
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
        loader: 'file-loader',
      },
      { 
        // JSON
        test: /\.json$/, 
        loader: 'json-loader' 
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
    // SETS SKELETON HTML PATH. Adds in script tags and other to HTML
    new HtmlWebpackPlugin({
      hash: false,
      filename: 'index.html',
      template: srcPath + '/index.html',
      inject: 'body'
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // Code Spitting. manifest is there due to: https://webpack.js.org/guides/code-splitting-libraries/
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, srcPath)) === -1;
      }
    }),
    new webpack.NamedModulesPlugin(),
    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
