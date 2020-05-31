import React, { useState, useEffect } from 'react'
import { Box } from './Box'

const scoreConfig: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

interface GreenScoreProps {
    onChange(quantity: number): void
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
        onChange(quantity)
    }, [checkedState, onChange])

    const handleClick = (rowIndex) => {
        setCheckedState(rowIndex)
    }

    return (
        <div data-testid='GreenScore' style={{ backgroundColor: '#7de258' }}>
            {scoreConfig.map((value, rowIndex) => {
                return (
                    <Box
                        key={`${rowIndex}`}
                        onClick={() => handleClick(rowIndex)}
                        checked={checkedState[rowIndex]}
                        display={<span style={{ fontSize: '0.5em' }}>{`>=${value}`}</span>}
                    />
                )
            })}
        </div>
    )
}
