import { calulateTotalScore } from '../totalScore'

describe('totalScore', () => {
    it('should add up the scores of yellow, blue, green, orange and purple', () => {
        expect(
            calulateTotalScore({
                yellowScore: 10,
                blueScore: 20,
                greenScore: 20,
                orangeScore: 20,
                purpleScore: 20,
                foxCount: 0,
            })
        ).toEqual(90)
    })

    it('should determine the lowest scoring color and calculate the fox score, given the number of foxes', () => {
        expect(
            calulateTotalScore({
                yellowScore: 10,
                blueScore: 20,
                greenScore: 20,
                orangeScore: 20,
                purpleScore: 20,
                foxCount: 2,
            })
        ).toEqual(110)
    })
})
