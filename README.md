# Jasmine Ts Auto Mock

This is a library that wrap ts-auto-mock to use it with jasmine
[ts-auto-mock](https://github.com/uittorio/ts-auto-mock)

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
```ts
import { Mock, createMock } from 'ts-auto-mock';

interface Person {
  id: string;
  getName(): string; // jasmine.Spy  
}
const mock = createMock<Person>(); // creation of mock
const spy = On.Mock(mock).get(mockedMethod(person => person.getName)); // get the SPY

mock.getName(); // call the function

expect(spy).toHaveBeenCalled();

```

## Authors

* **Vittorio Guerriero**
* **Giulio Caprino** 

## License

This project is licensed under the MIT License
