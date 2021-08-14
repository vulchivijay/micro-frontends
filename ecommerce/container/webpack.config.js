const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // not used, added for clarity. only needed for remotes
      remotes: { // lists projects that the container can search to get additional code
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
        // products: load the file at the listed url if anything in container has an import like import abc from products
        // url - products: related to the 'name' property in the product webpack config file
        // url - url: url for the remoteEntry file.
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html' // starting point
    })
  ]
}
