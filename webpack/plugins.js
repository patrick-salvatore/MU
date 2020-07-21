/* eslint-disable @typescript-eslint/no-var-requires */
import webpack from 'webpack';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { currentDirectory } from './envs';
import WebpackBar from 'webpackbar';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const plugins = [
  // getDotenv(env),
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
  // new ExtractCssChunks({
  //   filename: 'css/[name].min.css',
  //   chunkFilename: 'css/[id].min.css',
  // }),
];

export default plugins;
