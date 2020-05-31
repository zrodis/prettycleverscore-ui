import React, { useState } from 'react'
import { Box } from './Box'

const scoreConfig: number[] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

export const GreenScore = (props: { onChange(): void }) => {
    const [checkedState, setCheckedState] = useState(() => Array.from(scoreConfig, () => false))

    const handleClick = (rowIndex) => {
        const c = [...checkedState]

        if (!checkedState[rowIndex]) {
            const firstUnchecked = checkedState.findIndex((checked) => !checked)

            c[firstUnchecked] = !c[firstUnchecked]
        }

        setCheckedState(c)
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
