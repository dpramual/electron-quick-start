var path = require('path');

module.exports = {
    entry: "./app/index.js",
    output: { path: __dirname, filename: 'dist/bundle.js' },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },            
            { test: /\.json$/, loader: 'json-loader'},
        ]
    },

    // https://github.com/chentsulin/webpack-target-electron-renderer#how-this-module-works
    target: 'electron-renderer' // to allow using electron node component from renderer process
};