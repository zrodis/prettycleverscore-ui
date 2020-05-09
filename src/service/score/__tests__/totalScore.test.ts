import { calulateTotalScore } from '../totalScore'

describe('totalScore', () => {
    it('should add up the scores of yellow, blue, green, orange and purple', () => {
        expect(
            calulateTotalScore({
                yellow: [10, 20],
                blue: 7,
                green: 6,
                orange: [6, 3, 5, 5, 6, 4, 3, 4],
                purple: [2, 5, 6, 6, 1, 3, 6, 3],
                foxes: 0,
            })
        ).toEqual(149)
    })

    it('should determine the lowest scoring color and calculate the fox score, given the number of foxes', () => {
        expect(
            calulateTotalScore({
                yellow: [10, 20],
                blue: 7,
                green: 6,
                orange: [6, 3, 5, 5, 6, 4, 3, 4],
                purple: [2, 5, 6, 6, 1, 3, 6, 3],
                foxes: 2,
            })
        ).toEqual(191)
    })
})
