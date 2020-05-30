import { useEffect } from 'react'

interface UseYellowScore {
    onChange(score: number[]): void
    columns: number[]
}

export const useYellowScore = ({ onChange, columns }: UseYellowScore) => {
    useEffect(() => {
        const columnToScore = { 0: 10, 1: 14, 2: 16, 3: 20 }

        onChange(columns.map((val) => columnToScore[val]))
    }, [onChange, columns])
}
