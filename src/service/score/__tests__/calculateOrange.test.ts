import { calculateOrange } from '../scores'

describe('calculateOrange', () => {
    it('calculates the basic addition for the orange boxes', () => {
        expect(calculateOrange({ values: [6, 6] })).toEqual(12)
        expect(calculateOrange({ values: [6, null, null] })).toEqual(6)
    })

    it('caclulates the double bonuses', () => {
        expect(calculateOrange({ values: [5, 5, 5, 5, 0] })).toEqual(25)
        expect(calculateOrange({ values: [0, 0, 0, 4, 0, 0, 4] })).toEqual(16)
        expect(calculateOrange({ values: [0, 0, 0, 4, 0, 0, 4, 0, 4] })).toEqual(24)
    })

    it('caclulates the triple bonus', () => {
        expect(calculateOrange({ values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5] })).toEqual(15)
    })
})
