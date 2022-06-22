import { getCounterValue } from "./get-counter-value";

describe('getCountervalue', () => {

    it('works with empty state', () => {
        expect(getCounterValue({})).toBe(0);
    });
    it('works with provided state state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100);
    })
})