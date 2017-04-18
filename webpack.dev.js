// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const HtmlWebpackPlugin         = require('html-webpack-plugin');

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
          // IMAGES
          test: /\.(png|jpg)$/,
          include: [ srcPath ],
          loader: "file-loader",
        },

        { 
          // JSON
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
        names: ['app', 'manifest'],
      }),

      new webpack.NamedModulesPlugin()

    ],

    devServer: {
      contentBase: srcPath,
      historyApiFallback: {
        disableDotRule: true
      },
      compress: false,
      inline: false,
      hot: true,
      stats: {
        assets: true,
        children: true,
        chunks: true,
        hash: true,
        modules: true,
        publicPath: true,
        timings: true,
        version: true,
        warnings: true
      }
    }

};


// // Plugin / Base Require
// const webpack                   = require('webpack');
// const path                      = require('path');
// const HtmlWebpackPlugin         = require('html-webpack-plugin');
// // const ScriptExtHtmlWebpackPlugin= require('script-ext-html-webpack-plugin');
// // const ExtractTextPlugin         = require('extract-text-webpack-plugin');
// // const I18nPlugin                = require("i18n-webpack-plugin");
// // const ngAnnotatePlugin          = require('ng-annotate-webpack-plugin');

// // Webpack Variables
// const srcPath                   = path.join(__dirname, './src');
// const srcEntry                  = path.join(__dirname, './src/index.js');
// const distPath                  = path.join(__dirname, './dist');

// const languages = {
// 	"en": null,
// 	"de": require("./src/data/de.json")
// };

// module.exports = Object.keys(languages).map(function(language) {
//   return {

//     // START POINT OF BUNDLER
//     entry: {
//       app: srcEntry
//     },

//     // OUTPUT OF WEBPACK
//     output: {
//       path: distPath,
//       filename: '[name].bundle.js',
//       sourceMapFilename: '[name].map',
//       chunkFilename: '[id].chunk.js',
//       publicPath: '/',
//     },

//     // I18n -- Doesn't work atm
//     // name: language,
//     // entry: srcPath + "index.js",
//     // output: {
//     //   path: path.join(__dirname, "js"),
//     //   filename: language + ".output.js"
//     // },

//     // MODULES
//     module: {

//       rules: [
//         {
//           // HTML
//           test: /\.html$/,
//           include: [ path.resolve(__dirname, srcPath) ],
//           loader: "html-loader"
//         },
//         {
//           // CSS
//           test: /\.css$/,
//           include: [ path.resolve(__dirname, srcPath) ],
//           //use: ExtractTextPlugin.extract({
//             use: [
//               { 
//                 loader: "style-loader" 
//               },
//               {
//                 loader: 'css-loader?importLoaders=1'
//               },
//               {
//                 loader: "postcss-loader",
//                 options: { 
//                   config: "./config/postcss.config.js"
//                 }
//               }
//             ]
//           //})
//         },
//         {
//           // JS
//           test: /\.(js)$/,
//           include: [ path.resolve(__dirname, srcPath) ],
//           use: [
//             {
//               loader: "babel-loader",
//               options: {
//                 presets:['es2015']
//               }
//             }
//             // {
//             //   loader: 'ng-annotate-loader',
//             //   options: {
//             //     map: true,
//             //     add: true
//             //   }
//             // }
//           ],
//         },
//         // {
//         //   // ISTANBUL
//         //   test: /\.js$/,
//         //   exclude: [
//         //     /node_modules/,
//         //     /\.spec\.js$/
//         //   ],
//         //   loader: 'istanbul-instrumenter-loader',
//         //   query: {
//         //     esModules: true
//         //   }
//         // },
//         {
//           // IMAGES
//           test: /\.(png|jpg)$/,
//           include: [ path.resolve(__dirname, srcPath) ],
//           loader: "file-loader",
//         },
//         { 
//           // JSON
//           test: /\.json$/, 
//           include: [ path.resolve(__dirname, srcPath) ],
//           loader: "json-loader" 
//         }
//       ]
//     },

//     // RESOLVE
//     resolve: {

//       modules: [
//         "node_modules",
//         path.resolve(__dirname, srcPath)
//       ],

//       extensions: [".js", ".json", ".jsx", ".css"],
//     },

//     performance: {
//         hints: "warning",
//         maxAssetSize: 200000,
//         maxEntrypointSize: 400000,
//         assetFilter: function(assetFilename) { 
//           return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
//         }
//       },

//     // SOURCEMAPS
//     devtool: 'source-map',

//     context: srcPath,

//     // the environment in which the bundle should run
//     target: "web",

//     externals: [ "angular" ],

//     // PLUGINS
//     plugins: [

//       // I18nPlugin
//       //new I18nPlugin(languages[language]),

//       // SETS SKELETON HTML PATH. Adds in script tags and other to HTML
//       new HtmlWebpackPlugin({
//         hash: true,
//         filename: 'index.html',
//         template: srcPath + '/index.html',
//         inject: 'body'
//       }),
//       // new ScriptExtHtmlWebpackPlugin({
//       //   defaultAttribute: 'async'
//       // }),
//       // new ExtractTextPlugin({
//       //   filename: srcPath + 'src/[name].css', 
//       //   allChunks: true
//       // }),
//       // Loader Options
//       new webpack.LoaderOptionsPlugin({
//         minimize: false,
//         debug: false,
//       }),
//       // Code Spitting. manifest is there due to: https://webpack.js.org/guides/code-splitting-libraries/
//       new webpack.optimize.CommonsChunkPlugin({
//         names: ['vendor', 'manifest'],
//         // minChunks: function (module, count) {
//         //   return module.resource && module.resource.indexOf(path.resolve(__dirname, srcPath)) === -1;
//         // }
//       }),
//       new webpack.NamedModulesPlugin()
//     ],

//     // DEV SERVER
//     devServer: {
//       contentBase: srcPath,
//       historyApiFallback: {
//         disableDotRule: true
//       },
//       compress: false,
//       inline: true,
//       hot: true,
//       stats: {
//         assets: true,
//         children: false,
//         chunks: false,
//         hash: false,
//         modules: false,
//         publicPath: false,
//         timings: true,
//         version: false,
//         warnings: true
//       }
//     },

//     recordsPath: path.resolve(__dirname, "build/records.json"),
//     recordsInputPath: path.resolve(__dirname, "build/records.json"),
//     recordsOutputPath: path.resolve(__dirname, "build/records.json")

//   };
// });
