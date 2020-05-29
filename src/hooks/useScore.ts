import { useState, useEffect } from 'react'
import { getRowMatches, getColumnMatches } from '../components/RowChekerHelper'

export const useScore = ({ onChange }) => {
    const [checkedState, setChecked] = useState<boolean[][]>([
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
        [false, false, false, false],
    ])

    const [bingoState, setBingo] = useState({ rows: [], columns: [] })

    function setScore({ rowIndex, columnIndex }) {
        const newChecked = [...checkedState]
        newChecked[rowIndex][columnIndex] = !newChecked[rowIndex][columnIndex]
        setChecked(newChecked)

        setBingo({
            rows: getRowMatches(newChecked),
            columns: getColumnMatches(newChecked),
        })
    }

    useEffect(() => {
        const scoreMap = { 0: 10, 1: 14, 2: 16, 3: 20 }

        onChange(bingoState.columns.map((val) => scoreMap[val]))
    })

    return { checkedState, bingoState, setScore }
}
