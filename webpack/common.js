/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import plugins from './plugins';
import { rules } from './loaders';
import { jsFolder, outputPath, entryPath } from './paths';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const dirName = path.join(__dirname, '../');

const entry = {
  // vendor: 'react',
  bundle: entryPath,
};

const output = {
  publicPath: '/',
  path: outputPath,
  filename: `${jsFolder}/[name].min.js`,
  chunkFilename: `${jsFolder}/[name].min.js`,
};

const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
    minSize: 10000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 5,
    automaticNameDelimiter: '/',
    name: 'common-chunk',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        minChunks: 2,
      },
      styles: {
        test: /\.(sa|sc|c)ss$/,
        chunks: 'all',
        minChunks: 2,
      },
    },
  },
};

const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: 'tsconfig.json',
    }),
  ],
  // alias: {
  //   '@hooks': path.resolve(dirName, 'src', 'hooks'),
  //   '@components': path.resolve(dirName, 'src', 'components'),
  //   '@api': path.resolve(dirName, 'src', 'api'),
  //   '@store': path.resolve(dirName, 'src', 'store'),
  //   '@providers': path.resolve(dirName, 'src', 'providers'),
  //   '@scss': path.resolve(dirName, 'src', 'scss'),
  //   '@pages': path.resolve(dirName, 'src', 'pages'),
  //   '@routes': path.resolve(dirName, 'src', 'routes'),
  //   '@styledComponents': path.resolve(dirName, 'src', 'styledComponents'),
  //   '@utils': path.resolve(dirName, 'src', 'utils'),
  //   '@img': path.resolve(dirName, 'public', 'img'),
  //   '@fonts': path.resolve(dirName, 'public', 'fonts'),
  // },
};

export default {
  entry,
  output,
  optimization,
  resolve,
  module: { rules, strictExportPresence: true },
  plugins: [...plugins],
};
