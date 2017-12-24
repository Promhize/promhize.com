const path = require('path')
const dev = process.env.NODE_ENV === 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/setup/client.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].app.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 8080,
    open: false,
    openPage: '',
    stats: {
      modules: false,
      performance: true,
      timings: true,
      warnings: true,
    },
    historyApiFallback: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/prod/icons/[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/url',
          'file-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jsx?|tsx?)/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', 'ts', '.js', '.json', '.css', '*'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
