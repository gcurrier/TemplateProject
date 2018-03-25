/* Reference https://webpack.js.org/guides/ , https://webpack.js.org/configuration/ */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
    lodash: ['lodash'],
    react: ['react'],
    reactDom: ['react-dom']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        exclude: /node_modules/
      },
      {
        /* This rule will insert css style to head of html document when not using html-webpack-template.
           Otherwise, css is included in main.js
        */
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    /*Omit the BundleAnalyzerPlugin for production builds - use to view dependency "weight"*/
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
      cache:true,
      parallel: true,
      extractComments:true,
      uglifyOptions:{
        keep_fnames:true,
        keep_classnames:true
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
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
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    // filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  performance: {
    hints: false
  },
  /* Intellisense does not like the "optimization" option...(Property 'optimization' is not allowed) */
  optimization: {
    splitChunks: {
      cacheGroups: {
        lodash: {
          // chunks: 'initial',
          name: 'lodash',
          test: 'lodash',
          enforce: true
        },
        react:{
          name:'react',
          test:'react',
          enforce: true
        },
        reactDom:{
          name:'reactDom',
          test:'reactDom',
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  /* Omit the devtool line for production builds */
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 8080
  }
};