import { createMock } from "ts-auto-mock";
import { method, On } from 'ts-auto-mock/extension';

describe('basic', () => {
	it('should get the spy with a method', () => {
		interface Interface {
			b: () => string;
		}

		const mock: Interface = createMock<Interface>();
		const bSpy = On(mock).get(method(x => x.b));

		expect(bSpy.and.identity).toBe("b");
	});

	it('should get the spy with a string', () => {
		interface Interface {
			b: () => string;
		}

		const mock: Interface = createMock<Interface>();
		const bSpy = On(mock).get(method('b'));

		expect(bSpy.and.identity).toBe("b");
	});
});
