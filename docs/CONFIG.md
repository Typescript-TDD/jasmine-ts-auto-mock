# CONFIG 
ts-auto-mock requires a common context between tests when you are using custom methods implementations

## karma-webpack
if you want to see the full code example go to [examples/karma-webpack](../examples/karma-webpack)

##### karma-webpack-config

```ts
const webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
    const _config = {
        ...
        files: [
            {
                pattern: "./entryFile.ts", // see below
                watched: false
            }
        ],
        preprocessors: {
            "../entryFile.ts" : // see below ['webpack']
        },
        ...
    };

    config.set(_config);
};
```
##### karma-webpack-entry-file
```ts 
//entryFile.ts
import "jasmine-ts-auto-mock";

const context = require.context('', true, /\.test\.ts$/);
context.keys().map(context);
```
