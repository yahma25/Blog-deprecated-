const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    // webpack-dev-server
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, "dist"),
        compress: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // Creates `style` nodes from JS strings. ex) <style> in html
                    MiniCssExtractPlugin.loader,
                    // Read css in source, Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: `[name].bundle.js`
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // create a new index.html to apply bundle.js made from output
            template: "./src/index.html"
        }),
        // create css integrated
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};