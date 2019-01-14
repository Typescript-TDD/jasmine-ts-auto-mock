/*globals module, require */

const path = require('path');

module.exports = {
    mode: "production",
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
        filename: "[name].js",
        path: path.resolve(__dirname, "..")
    }
};