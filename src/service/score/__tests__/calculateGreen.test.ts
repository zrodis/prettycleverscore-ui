import { calculateGreen } from '../scores'

describe('calculateGreen', () => {
    it('calculates the score for the green boxes', () => {
        expect(calculateGreen({ quantity: 0 })).toEqual(0)
        expect(calculateGreen({ quantity: 1 })).toEqual(1)
        expect(calculateGreen({ quantity: 2 })).toEqual(3)
        expect(calculateGreen({ quantity: 3 })).toEqual(6)
        expect(calculateGreen({ quantity: 4 })).toEqual(10)
        expect(calculateGreen({ quantity: 5 })).toEqual(15)
        expect(calculateGreen({ quantity: 6 })).toEqual(21)
        expect(calculateGreen({ quantity: 7 })).toEqual(28)
        expect(calculateGreen({ quantity: 8 })).toEqual(36)
        expect(calculateGreen({ quantity: 9 })).toEqual(45)
        expect(calculateGreen({ quantity: 10 })).toEqual(55)
        expect(calculateGreen({ quantity: 11 })).toEqual(66)
    })
})
