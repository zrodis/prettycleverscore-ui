import { useState } from 'react'
import { getRowMatches, getColumnMatches } from '../components/RowChekerHelper'

export const useScore = () => {
    const [checkedState, setChecked] = useState<boolean[][]>([
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
        [false, false, false, false],
    ])

    const [bingoState, setBingo] = useState({ rows: [], columns: [] })

    function setScore({ rowIndex, columnIndex }) {
        checkedState[rowIndex][columnIndex] = !checkedState[rowIndex][columnIndex]
        setChecked(checkedState)

        setBingo({
            rows: getRowMatches(checkedState),
            columns: getColumnMatches(checkedState),
        })
    }

    return { checkedState, bingoState, setScore }
}
