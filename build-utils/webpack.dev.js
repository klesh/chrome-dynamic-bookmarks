const commonPaths = require("./common-paths");

const options = {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: false,
    hot: true,
  },
};

module.exports = options;
