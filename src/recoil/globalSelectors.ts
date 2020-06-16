import { selector } from 'recoil'
import { yellow } from './yellowSelectors'
import { blue } from './blueSelectors'

export const bonusTotals = selector({
    key: 'bonusTotals',
    get: ({ get }) => {
        const yellowBonus = get(yellow.bonus)
        const blueBonus = get(blue.bonus)

        return {
            yellow: yellowBonus,
            blue: blueBonus,
            green: { fox: false, plusOnes: 0, reRolls: 0 },
            orange: { fox: false, plusOnes: 0, reRolls: 0 },
            purple: { fox: false, plusOnes: 0, reRolls: 0 },
            turns: { fox: false, plusOnes: 0, reRolls: 0 },
        }
    },
})
