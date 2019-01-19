import "../../../index"; // jamine-ts-auto-mock

const context = require.context('', true, /\.test\.ts$/);
context.keys().map(context);