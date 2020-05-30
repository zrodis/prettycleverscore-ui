import { useEffect } from 'react'

interface UseYellowScore {
    onChange(quantity: number): void
    checkedState: boolean[][]
}

export const useBlueScore = ({ checkedState, onChange }: UseYellowScore) => {
    useEffect(() => {
        const quantity = checkedState.reduce((total, currentRow) => {
            let rowTotal = 0
            currentRow.forEach((checked) => {
                if (checked) rowTotal++
            })
            return total + rowTotal
        }, -1)
        onChange(quantity)
    }, [checkedState, onChange])
}
