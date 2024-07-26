const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    mode: 'development',
    entry: {
       bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [new HtmlWebpackPlugin()],
}