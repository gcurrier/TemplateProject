/* Reference https://webpack.js.org/guides/ , https://webpack.js.org/configuration/ */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
    vendor: [
      'lodash','react','react-dom'
    ]
  },
  devtool: 'inline-source-map',
  // devtool: "source-map",
  //TODO Intellisense does not like the "optimization" option...(Property 'optimization' is not allowed)
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: 'lodash',
  //         test: 'lodash',
  //         enforce: true
  //       }
  //     }
  //   },
  //   runtimeChunk: {
  //     name: 'manifest'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        /* The awesome-typescript-loader prevents the HashedModuleIdsPlugin from actually providing an Id
           for each splitChunk
        */
        // use: 'awesome-typescript-loader',
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        exclude: /node_modules/
      },
      {
        /* This rule will insert css style to head of html document when not using html-webpack-template.
           Otherwise, css is included in main.js
        */
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    // Clean up the dist folder before build (delete it)
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React with Typescript',
      // Required
      inject: false,
      template: require('html-webpack-template'),
      // Create a div with this element id, then insert it into the document body
      appMountId: 'root',
      lang: 'en-US'
    }),
    //Generates a 4-character moduleID in build log output
    new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    // filename: '[name].js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 8080
  }
};