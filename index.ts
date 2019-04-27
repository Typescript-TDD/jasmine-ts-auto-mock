import { Provider } from "ts-auto-mock/extension";

Provider.instance.provideMethod((name: string, value: any) => {
    return jasmine.createSpy(name).and.returnValue(value);
});

type ReturnType = jasmine.Spy;

declare module 'ts-auto-mock/extension' {
	interface Method<TR> extends ReturnType {}
}
