/* Reference https://webpack.js.org/guides/ , https://webpack.js.org/configuration/ */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.ts',
		vendor: [
			'lodash'
		]
	},
	devtool: 'inline-source-map',
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'lodash',
					test: 'lodash',
					enforce: true
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}		
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		},
		//will insert css style to head of html document when not using html-webpack-template.
		//Otherwise, css is included in main.js
		{
			test: /\.css$/,
			use: ['style-loader','css-loader']
		}]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	plugins: [
		//Clean up the dist folder before build
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Typescript',
			// Required
			inject: false,
			template: require('html-webpack-template'),
			//Create a div with this element id, then insert it into the document body
			appMountId: 'root',
			lang: 'en-US',
		}),
		//Generates a 4-character moduleID in build log output
		new webpack.HashedModuleIdsPlugin(),
	],  
	output: {
	filename:'[name].[chunkhash].js',
	path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		hot: true,
		port: 8080
}
};