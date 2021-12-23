const path = require("path");
var CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "final.bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        // query: {
        //   name: "[name].[ext]?[hash]",
        // },
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ["style-loader", "css-loader", "sass-loader"],
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: __dirname + "/index.html", to: __dirname + "/dist" },
        {
          from: __dirname + "/src/assets",
          to: __dirname + "/dist/assets",
        },
      ],
    }),
  ],
};
