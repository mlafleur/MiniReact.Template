const webpack = require('webpack');
const bundleOutputDir = './wwwroot/dist';
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "Client"),
    entry: {
        main: './main.tsx'
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        publicPath: 'dist/',
        libraryTarget: 'var',
        library: 'Client'
    },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    module: {
        rules: [
            { test: /\.tsx?$/, include: /Client/, use: 'ts-loader' },
            { test: /\.css$/, include: /Client/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
    },
    devtool: 'source-map'
}