import { calculateBlue, countBlueSelection } from '../blue'

describe('calculateBlue', () => {
    it('calculates the score for the blue boxes', () => {
        expect(calculateBlue({ quantity: 0 })).toEqual(0)
        expect(calculateBlue({ quantity: 1 })).toEqual(1)
        expect(calculateBlue({ quantity: 2 })).toEqual(2)
        expect(calculateBlue({ quantity: 3 })).toEqual(4)
        expect(calculateBlue({ quantity: 4 })).toEqual(7)
        expect(calculateBlue({ quantity: 5 })).toEqual(11)
        expect(calculateBlue({ quantity: 6 })).toEqual(16)
        expect(calculateBlue({ quantity: 7 })).toEqual(22)
        expect(calculateBlue({ quantity: 8 })).toEqual(29)
        expect(calculateBlue({ quantity: 9 })).toEqual(37)
        expect(calculateBlue({ quantity: 10 })).toEqual(46)
        expect(calculateBlue({ quantity: 11 })).toEqual(56)
    })
})

describe('countBlueSelection', () => {
    const result = countBlueSelection([
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
    ])

    expect(result).toBe(2)
})
