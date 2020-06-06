import React, { useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { useGridSelection } from '../hooks/useGridSelection'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/score/bonusConstants'

interface YellowScoreProps {
    onChange(scores: number[], fox: boolean): void
}

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore: React.SFC<YellowScoreProps> = ({ onChange }: YellowScoreProps) => {
    const { checkedState, bingoState, setSelection } = useGridSelection([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ])

    useEffect(() => {
        const columnToScore = { 0: 10, 1: 14, 2: 16, 3: 20 }

        const fox = bingoState.rows.includes(3)

        onChange(
            bingoState.columns.map((val) => columnToScore[val]),
            fox
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bingoState.columns, bingoState.rows])

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setSelection({ rowIndex, columnIndex })
    }

    return (
        <div
            data-testid='YellowScore'
            className='scorebox-container'
            style={{ backgroundColor: COLOR.yellow }}
        >
            <div className='scorebox'>
                {scoreConfig.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {row.map((column, columnIndex) => {
                            const checked = checkedState[rowIndex][columnIndex]

                            return (
                                <Box
                                    key={`${rowIndex} ${columnIndex}`}
                                    onClick={() => handleClick(rowIndex, columnIndex)}
                                    checked={checked}
                                    display={column}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className='scoreright'>
                <BonusBox
                    checked={bingoState.rows.includes(0)}
                    display={<BonusIcon type={BONUS.FreeBlue} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(1)}
                    display={<BonusIcon type={BONUS.Orange4} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(2)}
                    display={<BonusIcon type={BONUS.FreeGreen} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(3)}
                    display={<BonusIcon type={BONUS.Fox} />}
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
            <div className='corner'>
                <BonusBox
                    checked={bingoState.diagonal}
                    display={<BonusIcon type={BONUS.PlusOne} />}
                />
            </div>
        </div>
    )
}
