import { minMax4 } from './minMax4';

describe('minMax4', () => {
    it('returns the minimum and maximum sum of 4 numbers from a given 5 number array', () => {
        expect(minMax4([1, 2, 3, 4, 5])).toEqual([10, 14]);
    })
});
