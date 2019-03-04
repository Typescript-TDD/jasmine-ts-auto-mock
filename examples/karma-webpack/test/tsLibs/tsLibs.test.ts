import { createMock, Mock, mockedMethod, On } from "ts-auto-mock";

describe('tsLib', () => {
	it('should return the name of spy', () => {
		interface Interface {
			a: Function;
		}

		const mock: Mock<Interface> = createMock<Interface>();
		const aSpy = On.Mock(mock).get(mockedMethod(x => x.a));
		
		expect(aSpy.and.identity).toBe("a");

		mock.a();
		expect(mock.a).toHaveBeenCalledWith();
	});
});
