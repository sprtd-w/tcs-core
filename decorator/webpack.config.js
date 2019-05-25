const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/script.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.bundle.js'
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  devtool: 'inline-source-map',
  watch: true
};