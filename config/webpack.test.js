const tsAutoMockTransformer = require('ts-auto-mock/transformer');

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [
                            tsAutoMockTransformer.transformer(program)
                        ]
                    })
                }
            }
        ]
    }
};