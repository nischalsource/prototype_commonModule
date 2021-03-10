const path = require('path');

module.exports = {
  entry: "./src/es6modules_index.jsx",
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {          
            loader: 'babel-loader',
            options: {
                "presets": [       
                    [
                        "@babel/preset-env",
                        {
                            "modules": "auto",
                            "targets": {
                            "node": "current"
                            },
                            "debug": true                 
                        }
                    ]       
                  ]
              }
            }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
};