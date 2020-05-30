import React from 'react'
import { Box, BonusBox } from './Box'
import { useGridSelection } from '../hooks/useGridSelection'
import { useBlueScore } from '../hooks/useBlueScore'

interface BlueScoreProps {
    onChange(quantity: number): void
}

const scoreConfig: number[][] = [
    [null, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

export const BlueScore = ({ onChange }: BlueScoreProps) => {
    const { checkedState, bingoState, setSelection } = useGridSelection([
        [true, false, false, false],
        [true, false, false, false],
        [true, false, false, false],
    ])

    useBlueScore({ onChange, checkedState })

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setSelection({ rowIndex, columnIndex })
    }

    return (
        <div
            data-testid='BlueScore'
            className='score-container'
            style={{ backgroundColor: '#9ad3ff' }}
        >
            <div className='scorebox'>
                {scoreConfig.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex}>
                            {row.map((column, columnIndex) => {
                                const checked = checkedState[rowIndex][columnIndex]

                                return (
                                    <Box
                                        key={`${rowIndex} ${columnIndex}`}
                                        onClick={() => handleClick(rowIndex, columnIndex)}
                                        checked={checked}
                                        display={column}
                                        renderBlank={column === null}
                                    />
                                )
                            })}
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
            </div>
            <div className='scorebottom'>
                <BonusBox checked={bingoState.columns.includes(0)} />
                <BonusBox checked={bingoState.columns.includes(1)} />
                <BonusBox checked={bingoState.columns.includes(2)} />
                <BonusBox checked={bingoState.columns.includes(3)} />
            </div>
        </div>
    )
}
