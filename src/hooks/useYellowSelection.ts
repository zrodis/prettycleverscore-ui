import { useState } from 'react'
import { getRowMatches, getColumnMatches } from '../components/BingoCheckerHelper.test'

export interface BingoState {
    rows: number[]
    columns: number[]
}

export const useYellowSelection = (inital: boolean[][]) => {
    const [checkedState, setChecked] = useState<boolean[][]>(inital)

    const [bingoState, setBingo] = useState<BingoState>({
        rows: [],
        columns: [],
    })

    function setSelection({ rowIndex, columnIndex }) {
        checkedState[rowIndex][columnIndex] = !checkedState[rowIndex][columnIndex]
        setChecked(checkedState)

        setBingo({
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
        })
    }

    return { checkedState, bingoState, setSelection }
}
