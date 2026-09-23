const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|eot|woff|woff2|ttf|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[hash][ext]"
        }
      },
      {
        test: /\.txt$/i,
        type: "asset/source"
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  externals: [/^vendor\/.+\.js$/]
};
