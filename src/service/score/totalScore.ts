import { add } from './scores'

interface TotalScore {
    yellowScore: number
    blueScore: number
    greenScore: number
    orangeScore: number
    purpleScore: number
    foxCount: number
}

export const calulateTotalScore = (scoreData: TotalScore): number => {
    const scoreTotals = [
        scoreData.yellowScore,
        scoreData.blueScore,
        scoreData.orangeScore,
        scoreData.greenScore,
        scoreData.purpleScore,
    ]

    const lowestScore = scoreTotals.reduce((lowest, current) => {
        if (current < lowest) return current
        return lowest
    })

    const foxScore = lowestScore * scoreData.foxCount

    return add({
        values: [...scoreTotals, foxScore],
    })
}
