module.exports = {
  "entry": "./src/es6/Main.jsx",
  "output": {
    "path": "./src/js",
    "filename": "Aether.js"
  },
  "module": {
    "loaders": [
      { 
        "es6": "src/es6", 
        "loader": "babel-loader"
      }
    ]
  },
  "resolve": {
    "extensions": ["", ".js", ".jsx"],
    "modulesDirectories": ["./src/dist/js"],
  }
};