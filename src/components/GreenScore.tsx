import React, { useState, useEffect } from 'react'
import { Box } from './Box'
import { COLOR } from '../constants/colors'
import { ScoreRowContainer } from './ScoreRowContainer'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/score/bonusConstants'
import { calculateGreen } from '../service/score/scores'

const scoreConfig: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

const bonusMap = [
    null,
    null,
    null,
    BONUS.PlusOne,
    null,
    BONUS.FreeBlue,
    BONUS.Fox,
    null,
    BONUS.Purple6,
    BONUS.ReRoll,
    null,
]

interface GreenScoreProps {
    onChange(quantity: number, fox: boolean): void
}

const useGreenSelection = () => {
    const [checked, setChecked] = useState(() => Array.from(scoreConfig, () => false))

    function setCheckedState(rowIndex) {
        const c = [...checked]

        if (!checked[rowIndex]) {
            const firstUnchecked = checked.indexOf(false)

            c[firstUnchecked] = !c[firstUnchecked]
        }

        if (checked[rowIndex]) {
            const firstChecked = checked.lastIndexOf(true)

            c[firstChecked] = !c[firstChecked]
        }

        setChecked(c)
    }

    return { checkedState: checked, setCheckedState }
}

export const GreenScore = ({ onChange }: GreenScoreProps) => {
    const { checkedState, setCheckedState } = useGreenSelection()

    useEffect(() => {
        const quantity = checkedState.reduce((total, isTrue) => {
            return isTrue ? total + 1 : total
        }, 0)

        const fox = quantity >= 6

        onChange(quantity, fox)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedState])

    const handleClick = (rowIndex) => {
        setCheckedState(rowIndex)
    }

    return (
        <ScoreRowContainer testId='GreenScore' color={COLOR.green}>
            {scoreConfig.map((value, index) => {
                return (
                    <div key={index} style={{ display: 'inline-block' }}>
                        <div>{calculateGreen({ quantity: index + 1 })}</div>
                        <Box
                            key={`${index}`}
                            onClick={() => handleClick(index)}
                            checked={checkedState[index]}
                            display={<span style={{ fontSize: '0.5em' }}>{`>=${value}`}</span>}
                        />
                        <BonusIcon type={bonusMap[index]} />
                    </div>
                )
            })}
        </ScoreRowContainer>
    )
}
