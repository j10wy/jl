// Require the path and ExtractTextPlugin modules. 
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Create a new object from ExtractTextPlugin. Set the filename to style.css and save in the public/css directory. The path is based on the output directory in the object referenced by module.exports

const extractLess = new ExtractTextPlugin({
	// Here is a way to name your files with a hash - filename: "../css/[name].[contenthash].css"
	filename: 'css/style.css',
	disable: process.env.NODE_ENV === 'development'
});

const uglifyJs = new UglifyJsPlugin({
	test: /\.js($|\?)/i,
	sourceMap: true,
	extractComments: true
});

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'public/')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.less$/,
			use: extractLess.extract({
				use: [{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				}, {
					loader: 'less-loader',
					options: {
						sourceMap: true
					}
				}],
				// use style-loader in development
				fallback: 'style-loader'
			})
		}, {
			test: /\.(ttf|woff|woff2)$/,
			loader: 'file-loader',
			options: {
				publicPath: '../',
				outputPath: 'fonts/',
				name: '[name].[ext]'
			}
		}]
	},
	plugins: [
		extractLess,
		uglifyJs
	]
};