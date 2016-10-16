const Webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/app.js'
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel?sourceMap',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
};
