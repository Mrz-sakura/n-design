const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./examples/app.js",
  },
  module: {
    rules: [
      {
        test: /\.(vue|md)$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: [["@babel/preset-env"]],
          plugins: [
            [
              "babel-plugin-import",
              {
                libraryName: "n-design",
                libraryDirectory: "", // default: lib
                style: true,
              },
            ],
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-transform-object-assign",
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                sourceMap: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              hmr: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "z-design": path.join(__dirname, "./components"),
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".js", ".jsx", ".vue", ".md"],
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./examples/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
};
