const path = require('path')
const process = require('process')
const files = path.join(process.cwd(), 'karma.entry.js')

module.exports = config =>
  config.set({
    frameworks: ['jasmine'],
    files: [files],
    preprocessors: {
      [files]: ['webpack']
    },
    browsers: ['ChromeHeadless'],
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_module/,
            use: 'ts-loader'
          }
        ]
      }
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  })