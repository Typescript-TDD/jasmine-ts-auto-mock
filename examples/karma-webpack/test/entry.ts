import "../../../index"; // jasmine-ts-auto-mock

const context = require.context('', true, /\.test\.ts$/);
context.keys().map(context);