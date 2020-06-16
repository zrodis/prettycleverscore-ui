import { selector } from 'recoil'
import { getColumnMatches, getRowMatches } from '../components/BingoCheckerHelper'
import { BingoState } from '../hooks/useGridSelection'
import { blueCheckedState } from './atoms'
import { countBlueSelection, calculateBlue } from '../service/score/blue'

export const blueBingoState = selector<BingoState>({
    key: 'blueBingoState',
    get: ({ get }) => {
        const checkedState = get(blueCheckedState)
        return {
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
        }
    },
})

export const blue = {
    score: selector({
        key: 'blueScore',
        get: ({ get }) => {
            const checkedState = get(blueCheckedState)

            return calculateBlue({
                quantity: countBlueSelection(checkedState),
            })
        },
    }),
    bonus: selector({
        key: 'blueBonuses',
        get: ({ get }) => {
            const bingoState = get(blueBingoState)

            return {
                fox: bingoState.rows.includes(2),
                plusOnes: bingoState.columns.includes(3) ? 1 : 0,
                reRolls: bingoState.columns.includes(0) ? 1 : 0,
            }
        },
    }),
}
