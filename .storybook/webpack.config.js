const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/bootstrap/bootstrap.min.css' }
    ]),
    new webpack.NormalModuleReplacementPlugin(
      /@nx-demo-jest\/dummy1-service/,
      '../../../../libs/dummy1-service'
    )
  ]
}

// import { Dummy1Service } from '@nx-demo-jest/dummy1-service';
// tslint:disable-next-line
// import { Dummy1Service } from '../../../../libs/dummy1-service'
