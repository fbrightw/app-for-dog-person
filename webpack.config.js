const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.tsx', '.jsx', '.ts']
    },
    devServer: {
        port: 3200
        // static: {
        //     directory: path.join(__dirname, 'dist'),
        // },
        // client: {
        //     progress: true
        // },
        // hot: true,
        // open: true,
        // historyApiFallback: true,
    },
    target: 'web',
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html'
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin()
    ],

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
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
                        // plugins: ['@babel/plugin-proposal-class-properties'],
                        cacheDirectory: true
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    // {
                        // loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     hmr: true,
                        //     // reloadAll: true
                        // },
                    // },
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
})