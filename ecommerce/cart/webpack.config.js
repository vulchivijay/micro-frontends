const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart', // more on this 'name' in a moment
      filename: 'remoteEntry.js', // sets the name of the manifest file. leave it as remoteEntry.js unless you have got a good reason to change it.
      exposes: {
        './CartShow': './src/index' // aliases filenames
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html' // starting point
    })
  ]
};