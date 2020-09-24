/**
 * 公共配置
 */
const path = require("path");
const webpack = require("webpack");
const pkg = require("../package.json");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "zdesign.min.js",
    library: "zdesign",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          presets: [require.resolve("@babel/preset-env")],
          plugins: [
            require.resolve("@babel/plugin-proposal-object-rest-spread"),
          ],
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "'autoprefixer-loader'",
          },
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192",
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js",
      "@": resolve("src"),
    },
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    })
  ],
};
