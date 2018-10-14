 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/App.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015', {"plugins": ["transform-object-rest-spread", "transform-class-properties"]}, 'react']}
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
        ]
    }
};