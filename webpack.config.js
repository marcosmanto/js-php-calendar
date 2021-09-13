const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const config = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'js')
  },
  mode: devMode? 'development' : 'production',
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-transform-runtime"
            ],
            sourceType: 'unambiguous'
          }
        }
      }
    ]
  }
}

if(devMode) {
  config.devtool =  'source-map'
}

module.exports = config