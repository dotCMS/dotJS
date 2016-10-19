var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ],
        autoWatch: false,
        singleRun: false, //just run once by default
        frameworks: [ 'jasmine' ], // test frameworks
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        files: [
            {pattern: 'test/*_test.js', watched: false},
            {pattern: 'test/**/*_test.js', watched: false}
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            'test/*_test.js': ['webpack', 'sourcemap'],
            'test/**/*_test.js': ['webpack', 'sourcemap']
        },

        reporters: ['kjhtml'],

        // reporters: [ 'mocha' ], //report results in this format
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'ts' }
                ]
            }
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter'
        ]
    });
};