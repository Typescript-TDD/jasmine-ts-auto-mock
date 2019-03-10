import { createMock, mockedMethod, On } from "ts-auto-mock";

describe('names', () => {
    it('should give a name to the spy', () => {
    interface Interface {
        a(): string;
            b: () => string;
    }
    
        const mock: Interface = createMock<Interface>();
        const aSpy = On.Mock(mock).get(mockedMethod(x => x.a));
        const bSpy = On.Mock(mock).get(mockedMethod(x => x.b));
        
        expect(aSpy.and.identity).toBe("a");
        expect(bSpy.and.identity).toBe("b");
    });
});
