import { createMock, method, On } from "ts-auto-mock";

describe('tsLib', () => {
	it('should return the name of spy', () => {
		interface Interface {
			a: Function;
		}

		const mock: Interface = createMock<Interface>();
		const aSpy = On(mock).get(method(x => x.a));
		
		expect(aSpy.and.identity).toBe("a");

		mock.a();
		expect(mock.a).toHaveBeenCalledWith();
	});
});
