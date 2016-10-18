const Webpack = require('webpack');

const args = process.argv.filter(arg => /^--/.test(arg));
const isDev = args.find(arg => arg === '--dev');

const config = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel?sourceMap',
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass',
        test: /\.scss/
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`
  },
  postcss: [
    require('lost')
  ]
};

if (isDev) {
  config.devtool = 'source-map';
  config.entry.unshift('webpack-hot-middleware/client');
  config.plugins = [
    new Webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = config;
