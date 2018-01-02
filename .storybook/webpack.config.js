const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["raw-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
