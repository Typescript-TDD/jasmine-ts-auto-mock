/*globals module, require */

const path = require('path');

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    entry: {
        index: ['./index.ts']
    },
    output: {
        libraryTarget: "commonjs",
        filename: "[name].js",
        path: path.resolve(__dirname, "..")
    }
};