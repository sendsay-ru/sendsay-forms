// Karma configuration
// Generated on Fri Sep 27 2013 16:37:01 GMT+0400 (MSK)

module.exports = function (config) {
  config.set({
    client: {
      args: [{}],
    },

    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // frameworks to use
    frameworks: ['jasmine'],
    plugins: ['karma-mocha-reporter', 'karma-jasmine', 'karma-coverage', 'karma-chrome-launcher'],

    // list of files / patterns to load in the browser
    files: [{ pattern: 'test-dist/sendsayforms.js', included: true }],

    // list of files to exclude
    exclude: ['src/karma.conf.js', 'src/node_modules', 'src/bower_components/**/*.spec.js'],

    junitReporter: {
      outputFile: 'reporters/junit.xml',
    },

    browserNoActivityTimeout: 300000,

    hostname: process.env.HOST || 'localhost',

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    singleRun: true,
  });
};
