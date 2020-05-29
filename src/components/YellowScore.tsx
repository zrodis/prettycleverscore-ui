import React, { useState } from 'react'
import { Box, BonusBox } from './Box'
import { getRowMatches, getColumnMatches } from './RowChekerHelper'
import { useScore } from '../hooks/useScore'

interface YellowScoreProps {
    onClick(score: number[]): void
}

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore: React.SFC<YellowScoreProps> = ({ onClick }: YellowScoreProps) => {
    // const [checkedState, setChecked] = useState<boolean[][]>([
    //     [false, false, false, false],
    //     [false, false, false, false],
    //     [false, false, false, false],
    //     [false, false, false, false],
    // ])
    // const [bingoState, setBingo] = useState({ rows: [], columns: [] })

    // useScore({
    //     onChange: onClick,
    //     dependency: bingoState.columns,
    // })

    const { checkedState, bingoState, setScore } = useScore({ onChange: onClick })

    type Target = { rowIndex: number; columnIndex: number }

    const handleClick = async ({ rowIndex, columnIndex }: Target) => {
        // const newChecked = [...checkedState]
        // newChecked[rowIndex][columnIndex] = !newChecked[rowIndex][columnIndex]
        // setChecked(newChecked)

        // setBingo({
        //     rows: getRowMatches(newChecked),
        //     columns: getColumnMatches(newChecked),
        // })

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
                                    onClick={() => handleClick({ rowIndex, columnIndex })}
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
