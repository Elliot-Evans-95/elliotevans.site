const webpack                   = require('webpack');
const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const UglifyJSPlugin            = require('uglifyjs-webpack-plugin');
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

    devtool: 'none',

    context: srcPath,

    target: "web",

    externals: [ "angular" ],

    plugins: [

      new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html',
        template: srcPath + '/index.html',
        inject: 'body'
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module){
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      }),

      new webpack.NamedModulesPlugin(),

      new UglifyJSPlugin()

    ]

};