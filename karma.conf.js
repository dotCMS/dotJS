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
        reporters: ['kjhtml','mocha', 'remap-coverage' ,'coverage'],
        singleRun: false,

        files: [
            {
                pattern: './spec-bundle.js', watched: false
            }
        ],

        preprocessors: {
            './spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
        },

        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },

        // coverageReporter: {
        //         reporters:[
        //             {type: 'json', dir: '.', subdir: 'coverage' ,file: 'coverage-final.json'},
        //             {type: 'html', dir: '.', subdir: 'coverage'},
        //             {type : 'text', dir : 'coverage/'}
        //         ]
        //     },
        //
        // remapIstanbulReporter: {
        //     src: 'coverage/coverage-final.json',
        //     reports: {
        //         lcovonly: 'coverage/lcov.info',
        //         html: 'coverage'
        //     }
        // },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.ts', '.js']

            },
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'ts' }
                ],
                rules: [

                    /**
                     * Instruments JS files with Istanbul for subsequent code coverage reporting.
                     * Instrument only testing sources.
                     *
                     * See: https://github.com/deepsweet/istanbul-instrumenter-loader
                     */
                    {
                        enforce: 'post',
                        test: /\.(js|ts)$/,
                        loader: 'istanbul-instrumenter-loader',
                        include: './core',
                        exclude: [
                            /\.(e2e|spec)\.ts$/,
                            /node_modules/
                        ]
                    }

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
            'karma-jasmine-html-reporter',
            'karma-coverage',
            'karma-remap-istanbul',
            'karma-mocha-reporter',
            'karma-remap-coverage'
        ]
    });
};