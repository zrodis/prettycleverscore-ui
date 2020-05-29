import { useState } from 'react'
import { getRowMatches, getColumnMatches } from '../components/RowChekerHelper'

export const useYellowSelection = (inital) => {
    const [checkedState, setChecked] = useState<boolean[][]>(inital)

    const [bingoState, setBingo] = useState({ rows: [], columns: [] })

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
