const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "mini-webpack-ts-project",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      "~" : path.resolve(__dirname, "src")
    }
  },
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "src/index.ts"),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: "ts-loader",
      },
    ],
  },
};
