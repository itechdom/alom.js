"use strict";
var webpack = require("webpack");
var path = require("path");
module.exports = env => {
  return {
    entry: {
      main: "./index.js"
    },
    output: {
      path: path.join(__dirname, "lib"),
      chunkFilename: "[name].bundle.js",
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/, //Check for all js files
          use: [
            {
              loader: "babel-loader",
              options: { babelrcRoots: [".", "../"] }
            }
          ],
          exclude: /(node_modules|bower_compontents)/
        },
        {
          test: /\.jsx$/, //Check for all js files
          use: [
            {
              loader: "babel-loader",
              options: { babelrcRoots: [".", "../"] }
            }
          ],
          exclude: /(node_modules|bower_compontents)/
        },
        {
          test: /\.(css|sass|scss)$/, //Check for sass or scss file names
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                publicPath:
                  env && env.production ? "/playground/dist/" : "dist/"
              }
            },
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true // webpack@2.x and newer
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        react: path.resolve("./node_modules/react"),
        Templates: path.resolve(__dirname, "../Orbital/Templates/Material"),
        Theme: path.resolve(__dirname, "./theme.js"),
        "@material-ui/styles": path.resolve(
          "./node_modules/@material-ui/styles"
        ),
        Config: env
          ? env.production
            ? path.resolve(__dirname, "./config/prod.js")
            : path.resolve(__dirname, "./config/qa.js")
          : path.resolve(__dirname, "./config/index.js"),
        Store: path.resolve(__dirname, "../Orbital/Store"),
        Models: path.resolve(__dirname, "../Orbital/Models")
      }
    },
    //To run development server
    devServer: {
      contentBase: __dirname
    },
    devtool: "source-map"
  };
};
