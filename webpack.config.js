var path = require("path");
module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    watch: true,
	devtool:"source-map",
	module: {
    loaders: [{
            test: /\.js?$/,
            exclude: /(node_module)/,
            loader: "babel-loader",
            query: {
                presets: ["es2015", "react"]
            }
        },
        {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        }
    ]
    }
}
