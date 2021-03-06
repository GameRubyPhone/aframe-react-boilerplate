const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
require('babel-polyfill');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const ENTRY_POINTS = [
  './src/js/app.jsx',
];

const JS_LOADERS = [
  'babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0',
];

const PLUGINS = [];
if (IS_PRODUCTION) {
  // Uglify in production.
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
      sourcemap: false,
    })
  );
}

module.exports = {
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    // Bundle will be built at ./src/media/js.
    path: './build',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components)/,
        loaders: JS_LOADERS,
        test: /\.jsx?$/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  plugins: PLUGINS,
  resolve: {
    extensions: ['', '.js', '.json'],
    fallback: path.join(__dirname, 'node_modules'),
    modulesDirectories: [
      'src/js',
      'node_modules',
    ],
  },
  resolveLoader: {
    fallback: [path.join(__dirname, 'node_modules')],
  },
};
