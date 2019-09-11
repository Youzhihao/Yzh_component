const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Yzh_component.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader?limit=25000"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: []
}