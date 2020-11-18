/* eslint-disable @typescript-eslint/camelcase */
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = function(env, argv) {
  const isProd = argv.mode === 'production';

  const minify = {
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
  };

  const plugins = [
    new CompressionPlugin({
      test: /\.js$|\.css$|\.png$|\.jpg$|\.woff|\.woff2$/,
      threshold: 8192,
      minRatio: 0.7,
    }),
    new HtmlMinifierPlugin(minify),
  ];

  const prod = {
    mode: 'production',
    optimization: {
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      minimizer: [
        new TerserPlugin({
          sourceMap: !isProd,
          terserOptions: {
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
            cache: true,
          },
        }),
      ],
    },
    plugins,
  };

  return merge(common, prod);
};
