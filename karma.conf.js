const webpackConfig = require('./webpack.config.js');

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
