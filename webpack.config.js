const path = require("path");

module.exports = {
	entry: "./src/pages/index.tsx",
	mode: "development",
	devtool: "eval",
	devServer: {
		port: 3000,
		hot: true,
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
		fallback: {
			http: false,
			browser: false,
			https: false,
			stream: false,
			url: false,
			buffer: false,
			timers: false,
			path: false,
			util: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)?$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "app.js",
	},
};
