const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

const config = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /\/node_modules\//,
        loaders: ['babel-loader']
      },
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /.less/,
        loaders: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }, 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      root: path.resolve(__dirname, '/'),
    }
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BabiliPlugin()
  );
} else {
  config.resolve.alias['@the-tab/the-tab-core-bookmarks'] = path.resolve(__dirname, '../the-tab-core-bookmarks');
}

module.exports = config;
