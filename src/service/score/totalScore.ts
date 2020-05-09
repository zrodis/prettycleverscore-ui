import { calculateBlue, calculateGreen, calculateOrange, add } from './scores'

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

interface TotalScore {
    yellow: Array<number | string>
    blue: number
    green: number
    orange: Array<number | string>
    purple: Array<number | string>
    foxes: number
}
