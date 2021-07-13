const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const brokenPackagesRegExps = [
  /node_modules\/debug/,
];

module.exports = (env) => ({
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: {
    dev: "./App/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: (modulePath) =>
        /node_modules/.test(modulePath) &&
        !brokenPackagesRegExps.reduce(
          (acc, reg) => acc || reg.test(modulePath),
          false,
        ),
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(js)x?$/i,
        exclude: (modulePath) =>
        /node_modules/.test(modulePath) &&
        !brokenPackagesRegExps.reduce(
          (acc, reg) => acc || reg.test(modulePath),
          false,
        ),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: { vm: require.resolve("vm-browserify") },
  },
  plugins: [
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    disableHostCheck: true,
  },
  target: ["browserslist"],
});
