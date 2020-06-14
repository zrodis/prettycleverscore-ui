import { BONUS } from './bonusConstants'

export interface Bonuses {
    fox: boolean
    plusOnes?: number
    reRolls?: number
}

export type BonusState = Record<
    'yellow' | 'blue' | 'green' | 'orange' | 'purple' | 'turns',
    Bonuses
>

export const calculateBonusesForRow = (inputState: boolean[] | number[], bonusMap): Bonuses => {
    const bonuses: Bonuses = bonusMap.reduce(
        (accumulator, bonus, index) => {
            if (bonus === BONUS.Fox && !!inputState[index]) {
                accumulator.fox = true
            }
            if (bonus === BONUS.PlusOne && !!inputState[index]) {
                accumulator.plusOnes = ++accumulator.plusOnes
            }

            if (bonus === BONUS.ReRoll && !!inputState[index]) {
                accumulator.reRolls = ++accumulator.reRolls
            }

            return accumulator
        },
        { fox: false, plusOnes: 0, reRolls: 0 }
    )

    return bonuses
}
