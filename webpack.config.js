module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server'
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'react-hot!babel?sourceMap',
        test: /\.js$/
      }
    ]
  },
  noInfo: true,
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`
  }
};
