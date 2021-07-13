const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProgressPlugin = require('webpackbar');

const brokenPackagesRegExps = [
  /node_modules\/debug/,
];

module.exports = (env) => ({
  mode: "production",
  entry: {
    main: "./App/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "out/app"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].chunk.js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: (modulePath) =>
          /node_modules/.test(modulePath) &&
          !brokenPackagesRegExps.reduce(
            (acc, reg) => acc || reg.test(modulePath),
            false
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
            false
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
        type: "asset/resource",
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
    new ProgressPlugin({ name: 'webpack-demo'}),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
    }),
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "standalone.html",
      chunks: ["standalone"],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: ({ name }) => name !== "starter",
    },
  },
  target: ["browserslist"],
});
