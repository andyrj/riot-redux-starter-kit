var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

var PROD_ENV = JSON.parse(process.env.PROD_ENV || "0");

module.exports = {
	entry: {
		client: [
			'./src/index.js'
		],
		vendor: [
			'redux',
			'redux-thunk',
			'riot'
		]
	},
	module: {
		preLoaders: [
			{ 
				test: /\.tag$/, 
				exclude: /node_modules/, 
				loader: 'riotjs-loader', 
				query: { 
					type: 'none' 
				} 
			}
		],
		loaders: [
			{ 
				test: /\.js|\.tag$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			}
  	]
	}, 
	devtool: PROD_ENV ?[]: ["source-map"],
	output: {
		filename: './dist/bundle.js'
	},
	plugins: PROD_ENV ? [
		new webpack.ProvidePlugin({riot: 'riot'}),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/vendor.bundle.js"),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new CompressionPlugin({ asset: "{file}.gz", algorithm: "gzip", regExp: /\.js/, threshold: 10240, minRatio: 0.8 })
	] : [
		new webpack.ProvidePlugin({riot: 'riot'}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"dist/vendor.bundle.js"),
		new webpack.optimize.DedupePlugin()
	]
};
