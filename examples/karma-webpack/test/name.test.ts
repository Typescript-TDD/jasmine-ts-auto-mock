import { createMock } from "ts-auto-mock";
import { method, On } from 'ts-auto-mock/extension';

describe('names', () => {
    it('should give a name to the spy', () => {
        interface Interface {
            b: () => string;
            a(): string;
        }

        const mock: Interface = createMock<Interface>();
        const aSpy = On(mock).get(method(x => x.a));
        const bSpy = On(mock).get(method(x => x.b));

        expect(aSpy.and.identity).toBe("a");
        expect(bSpy.and.identity).toBe("b");
    });
});
