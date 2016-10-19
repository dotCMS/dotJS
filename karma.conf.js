var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        autoWatch: false,
        basePath: '',
        browsers: [ 'Chrome' ],
        colors: true,
        frameworks: [ 'jasmine' ], // test frameworks
        logLevel: config.LOG_INFO,
        port: 9876,
        reporters: ['kjhtml'],
        singleRun: false, //just run once by default

        files: [
            {
                pattern: './spec-bundle.js', watched: false
            }
        ],

        preprocessors: {
            './spec-bundle.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.ts', '.js']

            },
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'ts' }
                ]
            },
            node: {
                fs: "empty"
            }
        },

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        plugins: [
            require('karma-webpack'),
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter'
        ]
    });
};