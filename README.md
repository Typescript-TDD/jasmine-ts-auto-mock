# Jasmine Ts Auto Mock

This is a library that extend [ts-auto-mock](https://github.com/uittorio/ts-auto-mock) to be used with jasmine

The intention of the library is to automatically assign spies to mocks giving you type safety

## Requirements
`
typescript@^3.2.2
`

## Installation

- A Transformer needs to be provided at compile time. There are different ways to do it.
[Please read the following guide to find your configuration](https://github.com/uittorio/ts-auto-mock/blob/master/docs/TRANSFORMER.md)

- provide jasmine-ts-auto-mock before your test
[Please read the following guide to find your configuration](docs/CONFIG.md)

## Examples
[jasmine-karma-webpack](examples/karma-webpack)

## Usage
1) create an interface
```ts
interface Interface {
    methodToSpy: () => string
}
```
1) create a mock
```ts
const mock: Interface = createMock<Interface>();
```
2) get the method spy 
```ts
const spy: jasmine.Spy = On.Mock(mock).get(mockedMethod(mock => mock.methodToSpy));
```
3) trigger the method
```ts
someMethodThatWillTriggerInterfaceA();
expect(spy).toHaveBeenCalled();
```

## Authors

* **Vittorio Guerriero**
* **Giulio Caprino** 

## License

This project is licensed under the MIT License
