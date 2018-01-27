const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const libPath = path.resolve('libs');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/bootstrap/bootstrap.min.css' }
    ]),
   new webpack.NormalModuleReplacementPlugin(/@nx-demo-jest/, function(resource) {
      resource.request = resource.request.replace(/@nx-demo-jest/, libPath);
    })
  ]
}

// import { Dummy1Service } from '@nx-demo-jest/dummy1-service';
// tslint:disable-next-line
// import { Dummy1Service } from '../../../../libs/dummy1-service'
