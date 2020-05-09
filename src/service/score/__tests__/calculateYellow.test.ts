import { add } from '../scores'

describe('calculateYellow', () => {
    it('calculates the score for the yellow boxes using add', () => {
        expect(add({ values: [10, '', '', 20] })).toEqual(30)
        expect(add({ values: [10, 14, 16, 20] })).toEqual(60)
    })
})
