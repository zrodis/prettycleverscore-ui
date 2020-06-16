import { selector } from 'recoil'
import { getColumnMatches, getDiagonalMatch, getRowMatches } from '../components/BingoCheckerHelper'
import { BingoState } from '../hooks/useGridSelection'
import { add } from '../service/score/scores'
import { yellowCheckedState } from './atoms'

export const yellowBingoState = selector<BingoState>({
    key: 'yellowBingoState',
    get: ({ get }) => {
        const checkedState = get(yellowCheckedState)
        return {
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
            diagonal: getDiagonalMatch(checkedState),
        }
    },
})

export const yellow = {
    score: selector({
        key: 'yellowScore',
        get: ({ get }) => {
            const bingoState = get(yellowBingoState)
            const columnToScore = { 0: 10, 1: 14, 2: 16, 3: 20 }

            return add({ values: bingoState.columns.map((val) => columnToScore[val]) })
        },
    }),
    bonus: selector({
        key: 'yellowBonuses',
        get: ({ get }) => {
            const bingoState = get(yellowBingoState)

            return {
                fox: bingoState.rows.includes(3),
                plusOnes: bingoState.diagonal ? 1 : 0,
            }
        },
    }),
}
