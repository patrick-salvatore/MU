const merge = require('webpack-merge');
const devServer = require('./devServer');
const config = require('./common');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: true,
  },
  devServer: devServer,
  plugins: [new webpack.HotModuleReplacementPlugin(), new Visualizer()],
});
