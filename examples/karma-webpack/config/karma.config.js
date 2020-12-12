const webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
    const _config = {
        basePath: '',
        frameworks: ['jasmine'],
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        files: [
            {
                pattern: "../test/entry.ts",
                watched: false
            }
        ],
        preprocessors: {
            "../test/entry.ts" : ['webpack']
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true
    };

    config.set(_config);
};
