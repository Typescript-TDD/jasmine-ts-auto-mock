import { Mock, MockFactory } from "ts-auto-mock";

MockFactory.instance.registerFactory((name: string, value: any) => {
    return jasmine.createSpy(name).and.returnValue(value);
});

interface SpyWithReturnType<TR> {
    (...params: any[]): TR;

    and: jasmine.SpyAnd;
    calls: jasmine.Calls;
    withArgs(...args: any[]): jasmine.Spy;
}

declare module 'ts-auto-mock' {
    interface MockMethodExtension<TReturn> extends SpyWithReturnType<Mock<TReturn>> {}
}