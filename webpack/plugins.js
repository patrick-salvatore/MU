const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { currentDirectory } = require('./envs');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new WebpackBar({
    color: '#268bd2',
    minimal: false,
    compiledIn: false,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].min.css',
    chunkFilename: 'css/[id].min.css',
  }),
  new webpack.ProgressPlugin(),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{ from: 'public/static', to: 'static' }]),
  new HtmlWebpackPlugin({
    template: path.resolve(currentDirectory, 'public', 'index.html'),
    filename: 'index.html',
    favicon: path.resolve(currentDirectory, 'public', 'favicon', 'favicon.ico'),
    minify: {
      removeComments: true,
      removeEmptyAttributes: true,
    },
  }),
];

module.exports = plugins;
