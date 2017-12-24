var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }

            }
        ]
    },
    watch: true
}; 

module.exports = config;