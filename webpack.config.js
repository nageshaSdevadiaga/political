const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Clears old files on Dist
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // ✅ Support .ts and .tsx
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/, // CSS Loader
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/, // SCSS Loader
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"], // Allow import without specifying .js/.jsx
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
        }),
    ],
    devServer: {
        static: "./dist",
        port: 3000, // Runs on localhost:3000
        hot: true, // Enable hot module replacement,
        open: true,
    },
};


