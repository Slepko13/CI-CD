import counterReducer, { increment, decrement } from './counter-reducer';
describe('Counter reducer', () => {
    test('increment', () => {
        expect(counterReducer({ value: 2 }, increment())).toEqual({ value: 3 })
    });
    test('decrement', () => {
        expect(counterReducer({ value: 2 }, decrement())).toEqual({ value: 1 })
    });
    test('with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });

    });
})