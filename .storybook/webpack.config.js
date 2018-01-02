const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["raw-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/bootstrap/bootstrap.min.css' }
    ]),    
  ]
}
