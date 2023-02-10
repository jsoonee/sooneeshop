import path from "path";

module.exports = {
	entry: {
		app: ["./src/index.tsx"],
	},
	mode: "develpment",
	devtool: "eval",
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
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
