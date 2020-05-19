import React, { useState, useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { getRowMatches, getColumnMatches } from './RowChekerHelper'

interface YellowScoreProps {
    onClick(score: number[]): void
}
type CheckedState = boolean[][]

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]
const useScore = ({ onChange, dependency }) => {
    useEffect(() => {
        const scoreMap = {
            0: 10,
            1: 14,
            2: 16,
            3: 20,
        }

        onChange(dependency.map((val) => scoreMap[val]))
    }, [dependency])
}

export const YellowScore: React.SFC<YellowScoreProps> = ({ onClick }: YellowScoreProps) => {
    const [checkedState, setChecked] = useState<CheckedState>([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ])
    const [bingoState, setBingo] = useState({ rows: [], columns: [] })

    useScore({
        onChange: onClick,
        dependency: bingoState.columns,
    })

    type Target = { rowIndex: number; columnIndex: number }

    const handleClick = ({ rowIndex, columnIndex }: Target) => {
        const newChecked = [...checkedState]
        newChecked[rowIndex][columnIndex] = !newChecked[rowIndex][columnIndex]
        setChecked(newChecked)

        setBingo({
            rows: getRowMatches(newChecked),
            columns: getColumnMatches(newChecked),
        })
    }

    const rows = Object.entries(checkedState)

    return (
        <div data-testid='YellowScore'>
            <div data-testid='score-grid'>
                {rows.map(([rowKey, row], rowIndex) => {
                    return (
                        <div key={rowKey}>
                            {row.map((column, columnIndex) => (
                                <Box
                                    key={`${rowIndex} ${columnIndex}`}
                                    onClick={() => handleClick({ rowIndex, columnIndex })}
                                    checked={column}
                                    display={scoreConfig[rowIndex][columnIndex]}
                                />
                            ))}
                            <BonusBox checked={bingoState.rows.includes(rowIndex)} display={'?'} />
                        </div>
                    )
                })}
            </div>
            <div style={{ marginRight: '40px' }}>
                <BonusBox checked={bingoState.columns.includes(0)} display={'10'} />
                <BonusBox checked={bingoState.columns.includes(1)} display={'14'} />
                <BonusBox checked={bingoState.columns.includes(2)} display={'16'} />
                <BonusBox checked={bingoState.columns.includes(3)} display={'20'} />
            </div>
        </div>
    )
}
