const path = require('path');

module.exports = options => {

    return {

      entry: './src/index.js',
      output: {

        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')

      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react']
              }
            },

            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]

          }
        ]
      }

    }

  }