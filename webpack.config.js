//Here we get the absolute path to the file
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
		publicPath: "/dist"
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},
	    {
	        test: /\.s[ac]ss$/i,
	        exclude: /node_modules/,
	        use: [
	         // Creates `style` nodes from JS strings
	          'style-loader',
	          // Translates CSS into CommonJS
	          'css-loader',
	          // Compiles Sass to CSS
	          'sass-loader',
	        ],
	    },
	  ],
	},
};