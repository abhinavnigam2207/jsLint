const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: "none",
    entry: './main.js',

    output: {
      path: '/',
      filename: 'index.js'
    },

    devServer: {
      inline: true,
      port: 7777
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },

    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    },

    performance: {
      hints: false, // enum    maxAssetSize: 200000, // int (in bytes),
      maxEntrypointSize: 400000, // int (in bytes)
      assetFilter: function(assetFilename) {
        // Function predicate that provides asset filenames
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
    },

    plugins: [
        new LiveReloadPlugin()
    ]
  }