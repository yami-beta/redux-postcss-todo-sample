const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const path = require('path');

let entry = {
  style: [path.join(__dirname, 'src/style.css')],
};
let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new ExtractTextPlugin('[name].css'),
];

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      }
    ],
  },
  plugins,
  devtool: 'inline-source-map',
};

