import { MockFactory } from "ts-auto-mock";

MockFactory.instance.registerFactory((name: string, value: any) => {
    return jasmine.createSpy(name).and.returnValue(value);
});

type ReturnType = jasmine.Spy;

declare module 'ts-auto-mock' {
	interface MockMethod<TR> extends ReturnType {}
}