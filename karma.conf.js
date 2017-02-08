// Karma configuration
// Generated on Wed Feb 08 2017 13:55:45 GMT+0000 (GMT)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    webpack: webpackConfig, 
    basePath: '',
    files: [
      './src/components/**/*.spec.js'
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      './src/components/**/*.spec.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
    webpack: {},
    webpackMiddleware: {
        noInfo: true,
        stats: {
            chunks: false
        }
    },
    frameworks: ['jasmine']
  })
}
