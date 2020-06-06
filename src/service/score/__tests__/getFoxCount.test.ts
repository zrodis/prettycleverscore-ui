import { getFoxCount } from '../scores'

describe('getFoxScore', () => {
    it('calculate how many colors are true (none)', () => {
        expect(
            getFoxCount({
                yellow: false,
                blue: false,
                green: false,
                orange: false,
                purple: false,
            })
        ).toEqual(0)
    })

    it('calculate how many colors are true', () => {
        expect(
            getFoxCount({
                yellow: true,
                blue: true,
                green: false,
                orange: true,
                purple: true,
            })
        ).toEqual(4)
    })
})
