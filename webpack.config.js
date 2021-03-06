const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const VENDOR_LIBS = [
    "react",
    "lodash",
    "react-dom",
    "faker"
];

module.exports = {
    entry: {
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: "json-loader",
                test: /\.json$/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new Dotenv()
    ]
};
