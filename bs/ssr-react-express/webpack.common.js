const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLplugin = require('html-webpack-plugin');
const proxy = require('http-proxy-middleware')

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
    },
    {
        resolve: {
            extensions: [".js", ".jsx"]
        },
    }
]

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'server', 'build')
    },
    module: {rules},
    plugins: [
        new HTMLplugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    
}