import { useState, useEffect } from 'react'
import { getRowMatches, getColumnMatches, getDiagonalMatch } from '../components/BingoCheckerHelper'

export interface BingoState {
    rows: number[]
    columns: number[]
    diagonal?: boolean
}

export const useGridSelection = (inital: boolean[][]) => {
    const [checkedState, setChecked] = useState<boolean[][]>(inital)
    const [bingoState, setBingo] = useState<BingoState>({ rows: [], columns: [], diagonal: false })

    function setSelection({ rowIndex, columnIndex }) {
        const c = [...checkedState]
        c[rowIndex][columnIndex] = !c[rowIndex][columnIndex]
        setChecked(c)
    }

    useEffect(() => {
        setBingo({
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
            diagonal: getDiagonalMatch(checkedState),
        })
    }, [checkedState])

    return { checkedState, bingoState, setSelection, setChecked }
}
