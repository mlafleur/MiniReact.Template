const webpack = require("webpack");
const bundleOutputDir = "./wwwroot/dist";
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "Client"),
  entry: {
    main: "./main.tsx"
  },
  output: {
    path: path.join(__dirname, bundleOutputDir),
    filename: "[name].js",
    publicPath: "dist/",
    libraryTarget: "var",
    library: "Client"
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devtool: "source-map"
};
