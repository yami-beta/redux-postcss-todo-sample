const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const path = require('path');

let entry = {
  index: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
};

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'development') {
  entry.index = [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    ...entry.index,
  ];
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ];
} else if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ];
}

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
  devtool: 'inline-source-map',
};
