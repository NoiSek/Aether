// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");
const { DefinePlugin } = require("webpack");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/js/Main.jsx",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "Aether.js",
  },
  resolve: {
    extensions: [".js", ".min.js", ".jsx"],
    mainFiles: ["index", "Main"],
    modules: [
      "./dist/js",
      "./src/",
      "./src/js",
      "./src/img",
      "./src/font",
      "./src/sass",
      "./src/css",
      "./src/test",
      "./node_modules",
    ],
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss|sass$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
          "sass-loader",
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
        loader: "file-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-inline-loader",
            options: {
              removeTags: true,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, "node_modules", "pixi.js"),
        loader: "json",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  devtool: "inline-source-map",
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }

  config.plugins.push(
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(config.mode),
    })
  );

  return config;
};
