import React, { useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { useScore } from '../hooks/useScore'

interface YellowScoreProps {
    onChange(scores: number[]): void
}

type Target = { rowIndex: number; columnIndex: number }

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore: React.SFC<YellowScoreProps> = (props: YellowScoreProps) => {
    const { checkedState, bingoState, setScore } = useScore()

    useEffect(() => {
        const scoreMap = { 0: 10, 1: 14, 2: 16, 3: 20 }

        props.onChange(bingoState.columns.map((val) => scoreMap[val]))
    })

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setScore({ rowIndex, columnIndex })
    }

    const rows = Object.entries(checkedState)

    return (
        <div data-testid='YellowScore' className='score-container'>
            <div className='scorebox'>
                {rows.map(([rowKey, row], rowIndex) => {
                    return (
                        <div key={rowKey}>
                            {row.map((column, columnIndex) => (
                                <Box
                                    key={`${rowIndex} ${columnIndex}`}
                                    onClick={() => handleClick(rowIndex, columnIndex)}
                                    checked={column}
                                    display={scoreConfig[rowIndex][columnIndex]}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
            <div className='scoreright'>
                <BonusBox
                    checked={bingoState.rows.includes(0)}
                    display={'?'}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(1)}
                    display={'?'}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(2)}
                    display={'?'}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(3)}
                    display={'?'}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
            </div>
            <div className='scorebottom'>
                <BonusBox checked={bingoState.columns.includes(0)} display={'10'} />
                <BonusBox checked={bingoState.columns.includes(1)} display={'14'} />
                <BonusBox checked={bingoState.columns.includes(2)} display={'16'} />
                <BonusBox checked={bingoState.columns.includes(3)} display={'20'} />
            </div>
        </div>
    )
}
