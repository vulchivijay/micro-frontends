const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // more on this 'name' in a moment
      filename: 'remoteEntry.js', // sets the name of the manifest file. leave it as remoteEntry.js unless you have got a good reason to change it.
      exposes: {
        './ProductIndex': './src/boost' // aliases filenames
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html' // starting point
    })
  ]
};