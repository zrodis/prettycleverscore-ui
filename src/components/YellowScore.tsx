import React from 'react'
import { Box, BonusBox } from './Box'
import { useYellowSelection } from '../hooks/useYellowSelection'
import { useYellowScore } from '../hooks/useYellowScore'

interface YellowScoreProps {
    onChange(scores: number[]): void
}

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore: React.SFC<YellowScoreProps> = (props: YellowScoreProps) => {
    const { checkedState, bingoState, setSelection } = useYellowSelection([
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
        [false, false, false, false],
    ])

    useYellowScore({ onChange: props.onChange, columns: bingoState.columns })

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setSelection({ rowIndex, columnIndex })
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
