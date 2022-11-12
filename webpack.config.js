const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.tsx', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html',
        }),
        new CleanWebpackPlugin()

    ],

    devServer: {
        port: 8080,
        // contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        compress: true
    },

    optimization: {
        runtimeChunk: true,
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                        cacheDirectory: true
                    },
                },
            },

            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
})