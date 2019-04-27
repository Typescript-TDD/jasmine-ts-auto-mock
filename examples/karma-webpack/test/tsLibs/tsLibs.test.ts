import { createMock } from "ts-auto-mock";
import { method, On } from 'ts-auto-mock/extension';

describe('tsLib', () => {
	it('should return the name of spy', () => {
		interface Interface {
			a: Function;
		}

		const mock: Interface = createMock<Interface>();
		const aSpy: jasmine.Spy = On(mock).get(method(x => x.a));

		expect(aSpy.and.identity).toBe("a");

		mock.a();
		expect(mock.a).toHaveBeenCalledWith();
	});
});
