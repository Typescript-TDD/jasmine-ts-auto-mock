# Jasmine Ts Auto Mock

[![Actions Status](https://github.com/Typescript-TDD/jasmine-ts-auto-mock/workflows/Master/badge.svg)](https://github.com/Typescript-TDD/jasmine-ts-auto-mock/actions) 

This is a library that extend [ts-auto-mock](https://github.com/uittorio/ts-auto-mock) to be used with jasmine

The intention of the library is to automatically assign spies to mocks giving you type safety

## Requirements
`
typescript@^3.2.2
`

## Installation

- A Transformer needs to be provided at compile time. There are different ways to do it.
[Please read the following guide to find your configuration](https://github.com/Typescript-TDD/ts-auto-mock/blob/master/docs/TRANSFORMER.md)

- provide jasmine-ts-auto-mock before your test
[Please read the following guide to find your configuration](docs/CONFIG.md)

## Examples
- [jasmine-karma-webpack](examples/karma-webpack)
- [angular-cli-tspatch](examples/angular-cli-tspatch)

If you are using angular with typescript 3.7 you need to follow the solution in this issue:

https://github.com/angular/angular-cli/issues/16071

Add this in the polyfill until angular support typescript 3.7
```ts
// @ts-ignore
window.__importDefault = function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
};
```


## Usage
1) create an interface
```ts
interface Interface {
    methodToMock: () => string
}
```
2) create a mock
```ts
const mock: Interface = createMock<Interface>();
```
3) get the method mock 

You can get the method spy in 2 different ways

Through method
```ts
import { On, method } from "ts-auto-mock/extension";
const mockMethod: jasmine.Spy = On(mock).get(method(mock => mock.methodToMock));
```

Through string
```ts
import { On, method } from "ts-auto-mock/extension";
const mockMethod: jasmine.Spy = On(mock).get(method('methodToMock'));
```

4) trigger the method
```ts
someMethodThatWillTriggerInterfacemethodToMock();
expect(mockMethod).toHaveBeenCalled();
```

## Authors

* [**Vittorio Guerriero**](https://github.com/uittorio)
* [**Giulio Caprino**](https://github.com/pmyl)

## License

This project is licensed under the MIT License
