import { BONUS } from './bonusConstants'
import { calculateBonusesForRow } from './bonus'

describe('calculateBonuses, number input', () => {
    it('fox is false when there is no BONUS.Fox and input state is greater than 0', () => {
        const inputState = [3, 3, 0]
        const bonusMap = [null, null, BONUS.Fox]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 0,
            reRolls: 0,
        })
    })

    it('fox is true when there is BONUS.Fox', () => {
        const inputState = [3, 3, 3]
        const bonusMap = [null, null, BONUS.Fox]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: true,
            plusOnes: 0,
            reRolls: 0,
        })
    })

    it('counts number of plusOnes ', () => {
        const inputState = [3, 3, 3, 3]
        const bonusMap = [null, null, BONUS.PlusOne, BONUS.PlusOne]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 2,
            reRolls: 0,
        })
    })

    it('counts number of plusOnes ', () => {
        const inputState = [3, 3, 3]
        const bonusMap = [null, null, BONUS.ReRoll]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 0,
            reRolls: 1,
        })
    })
})

describe('calculateBonuses, boolean input', () => {
    it('fox is false when there is no BONUS.Fox and input state is false', () => {
        const inputState = [true, true, false]
        const bonusMap = [null, null, BONUS.Fox]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 0,
            reRolls: 0,
        })
    })

    it('fox is true when there is BONUS.Fox', () => {
        const inputState = [true, true, true]
        const bonusMap = [null, null, BONUS.Fox]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: true,
            plusOnes: 0,
            reRolls: 0,
        })
    })

    it('counts number of plusOnes ', () => {
        const inputState = [true, true, true, true]
        const bonusMap = [null, null, BONUS.PlusOne, BONUS.PlusOne]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 2,
            reRolls: 0,
        })
    })

    it('counts number of plusOnes ', () => {
        const inputState = [true, true, true]
        const bonusMap = [null, null, BONUS.ReRoll]

        expect(calculateBonusesForRow(inputState, bonusMap)).toEqual({
            fox: false,
            plusOnes: 0,
            reRolls: 1,
        })
    })
})
