var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        '@angular': [
            'rxjs',
            'reflect-metadata',
            'zone.js'
        ],
        'common': ['es6-shim'],
        // 'app': './src/app/main.ts',
        'vendor': './showcase/vendor.ts'
    },

    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(css|html)$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=10000'
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({names: ['@angular', 'common'], minChunks: Infinity}),
        new TypedocWebpackPlugin({
            name: 'dotcms-js',
            mode: 'file',
            out: '../showcase/dist/docs',
            includeDeclarations: false,
            ignoreCompilerErrors: true,
        })
    ]
};