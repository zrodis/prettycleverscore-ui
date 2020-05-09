import { add } from '../scores'

describe('calculatePurple', () => {
    it('calculates the score for the purple boxes using add', () => {
        expect(add({ values: [4, 5, 1, 4, 0] })).toEqual(14)
        expect(add({ values: [6, '6'] })).toEqual(12)
        expect(add({ values: [6, '', ''] })).toEqual(6)
    })
})
