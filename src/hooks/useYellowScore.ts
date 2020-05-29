import { useEffect } from 'react'

export const useYellowScore = ({ onChange, columns }) => {
    useEffect(() => {
        const columnToScore = { 0: 10, 1: 14, 2: 16, 3: 20 }

        onChange(columns.map((val) => columnToScore[val]))
    })
}
