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
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      Services: path.resolve(__dirname, 'src/core/services'),
      Scenes: path.resolve(__dirname, 'src/core/scenes'),
      Utils: path.resolve(__dirname, 'src/core/utils'),
      UiKit: path.resolve(__dirname, 'src/core/uiKit'),
      Variables: path.resolve(__dirname, 'src/core/uiKit/theme/variables.less'),
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
}

module.exports = config;
