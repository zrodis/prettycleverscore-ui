import { useState, useEffect } from 'react'
import { getRowMatches, getColumnMatches } from '../components/BingoCheckerHelper'

export interface BingoState {
    rows: number[]
    columns: number[]
}

export const useGridSelection = (inital: boolean[][]) => {
    const [checkedState, setChecked] = useState<boolean[][]>(inital)
    const [bingoState, setBingo] = useState<BingoState>({ rows: [], columns: [] })

    function setSelection({ rowIndex, columnIndex }) {
        const c = [...checkedState]
        c[rowIndex][columnIndex] = !c[rowIndex][columnIndex]
        setChecked(c)
    }

    useEffect(() => {
        setBingo({
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
        })
    }, [checkedState])

    return { checkedState, bingoState, setSelection }
}
