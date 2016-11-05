'use strict';

const env = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const webpackUMDExternal = require('webpack-umd-external');

const pluginsList = [];
const outputFileName = env === 'production' ?
    'react-swipes.min.js' :
    'react-swipes.js';

if (env === 'production') {
    pluginsList.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
    );
}

const config = {
    entry: path.join(__dirname, 'src/index.js'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: outputFileName,
        library: 'ReactSwipes',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    externals: webpackUMDExternal({
        'react': 'React'
    }),

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    plugins: pluginsList,

    module: {

        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    }
};

module.exports = config;
