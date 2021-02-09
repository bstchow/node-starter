import { print } from './helloWorld';

describe('index', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    })
    it('logs hello world', () => {
        print();
        expect(consoleSpy).toHaveBeenCalledWith('Hello world');
    })
});
