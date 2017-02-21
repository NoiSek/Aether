module.exports = {
  "entry": "./src/es6/Main.jsx",
  "output": {
    "path": "./src/js",
    "filename": "Aether.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "use": 'babel-loader'
      }
    ]
  },
  "resolve": {
    "extensions": ["", ".js", ".min.js", ".jsx"],
    "modulesDirectories": ["./src/dist/js", "./node_modules"],
  }
};
