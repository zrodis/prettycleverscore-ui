import { calculateGreen, calculateOrange, add } from './scores'
import { calculateBlue } from './blue'

interface TotalScore {
    yellow: Array<number>
    blue: number
    green: number
    orange: Array<number>
    purple: Array<number>
    foxes: number
}

export const calulateTotalScore = (scoreData: TotalScore): number => {
    const scoreTotals = [
        add({ values: scoreData.yellow }),
        calculateBlue({ quantity: scoreData.blue }),
        calculateOrange({ values: scoreData.orange }),
        calculateGreen({ quantity: scoreData.green }),
        add({ values: scoreData.purple }),
    ]

    const lowestScore = scoreTotals.reduce((lowest, current) => {
        if (current < lowest) return current
        return lowest
    })

    const foxScore = lowestScore * scoreData.foxes

    return add({
        values: [...scoreTotals, foxScore],
    })
}
