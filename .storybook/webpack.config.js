const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/bootstrap/bootstrap.min.css' }
    ]),    
  ]
}
