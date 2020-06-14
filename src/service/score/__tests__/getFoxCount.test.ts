import { getFoxCount } from '../scores'

describe('getFoxScore', () => {
    it('calculate how many colors are true (none)', () => {
        expect(
            getFoxCount({
                yellow: { fox: false },
                blue: { fox: false },
                green: { fox: false },
                orange: { fox: false },
                purple: { fox: false },
            } as any)
        ).toEqual(0)
    })

    it('calculate how many colors are true', () => {
        expect(
            getFoxCount({
                yellow: { fox: true },
                blue: { fox: true },
                green: { fox: false },
                orange: { fox: true },
                purple: { fox: true },
            } as any)
        ).toEqual(4)
    })
})
