import { selector } from 'recoil'
import { yellow } from './yellowSelectors'

export const bonusTotals = selector({
    key: 'bonusTotals',
    get: ({ get }) => {
        const yellowBonus = get(yellow.bonus)

        return {
            yellow: yellowBonus,
            blue: { fox: false, plusOnes: 0, reRolls: 0 },
            green: { fox: false, plusOnes: 0, reRolls: 0 },
            orange: { fox: false, plusOnes: 0, reRolls: 0 },
            purple: { fox: false, plusOnes: 0, reRolls: 0 },
            turns: { fox: false, plusOnes: 0, reRolls: 0 },
        }
    },
})
