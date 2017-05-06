// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const UglifyJSPlugin            = require('uglifyjs-webpack-plugin');

// Webpack Variables
const srcPath                   = path.join(__dirname, './src');
const srcEntry                  = path.join(__dirname, './src/index.js');
const distPath                  = path.join(__dirname, './dist');

module.exports = {

    entry: {
      app: srcEntry
    },

    output: {
      path: distPath,
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
      publicPath: '/',
    },

    module: {

      rules: [

        {
          test: /\.html$/,
          include: [ srcPath ],
          loader: "html-loader"
        },

        {
          test: /\.css$/,
          include: [ srcPath ],
          use: [
            { 
              loader: "style-loader" 
            },
            {
              loader: 'css-loader?importLoaders=1'
            },
            {
              loader: "postcss-loader",
              options: { 
                config: "./config/postcss.config.js"
              }
            }
          ]
        },

        {
          test: /\.(js)$/,
          include: [ srcPath ],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets:['es2015']
              }
            }
          ]
        },

        {
          test: /\.(png|jpg)$/,
          include: [ srcPath ],
          loader: "file-loader",
        },

        { 
          test: /\.json$/, 
          include: [ srcPath ],
          loader: "json-loader" 
        }

      ]
    },

    resolve: {

      modules: [
        "node_modules",
        srcPath
      ],

      extensions: [".js", ".json", ".jsx", ".css"],
    },

    performance: {
        hints: "warning",
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) { 
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
      },

    devtool: 'source-map',
    // devtool: 'none',

    context: srcPath,

    target: "web",

    //externals: [ "angular" ],

    plugins: [

      new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html',
        template: srcPath + '/index.html',
        inject: 'body'
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),

      new webpack.optimize.CommonsChunkPlugin({
        names: ['app', 'vendor', 'manifest'],
        minChunks: function (module, count) {
          return module.resource && module.resource.indexOf(path.resolve(__dirname, srcPath)) === -1;
        }
      }),

      new webpack.NamedModulesPlugin()

      //new UglifyJSPlugin()

    ]

};