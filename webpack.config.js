const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
	//filename: "../css/[name].[contenthash].css",
	filename: "../css/style2.css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public/js')
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: extractLess.extract({
				use: [{
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				}, {
					loader: "less-loader",
					options: {
						sourceMap: true
					}
				}],
				// use style-loader in development
				fallback: "style-loader"
			})
		}]
	},
	plugins: [
		extractLess
	]
};