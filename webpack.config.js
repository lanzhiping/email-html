const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development', //'production' | 'development' | 'none'

    entry: './emails/index.pug',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].html'
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: ["file-loader?name=[name].html", 'extract-loader', 'html-loader', 'pug-html-loader'],
                include: [ path.resolve(__dirname, 'emails') ]
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin('dist', { root: path.resolve(__dirname) })
    ]
};
