const webpack = require("webpack");
const bundleOutputDir = "./wwwroot/dist";
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "Client"),
  devtool: "source-map",
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
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

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // Used to load CSS styles
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
