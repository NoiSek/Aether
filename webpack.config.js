var path = require('path');
var webpack = require('webpack');

module.exports = function(env) {
  return {
    "entry": "./src/es6/Main.jsx",
    "output": {
      "path": path.resolve("./src/js"),
      "filename": "Aether.js"
    },
    "module": {
      "rules": [
        {
          "test": /\.(js|jsx)$/,
          "use": "babel-loader"
        },
        {
          "test": /\.svg$/,
          "use": [{
            "loader": "svg-inline-loader",
            "options": {
              "removeTags": true
            }
          }]
        }
      ]
    },
    "plugins": [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify((env.production) ? "production" : "development")
      })
    ],
    "resolve": {
      "extensions": [".js", ".min.js", ".jsx"],
      "modules": ["./src/dist/js", "./node_modules", "./src"]
    }
  };
};
