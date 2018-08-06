module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }
    ]
  }
}
