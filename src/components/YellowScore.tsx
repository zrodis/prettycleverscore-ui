import React, { useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { useGridSelection } from '../hooks/useGridSelection'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/bonusConstants'
import { Bonuses } from '../service/bonus'

interface YellowScoreProps {
    onChange(scores: number[], bonuses: Bonuses): void
}

const bonusMapRight = [BONUS.FreeBlue, BONUS.Orange4, BONUS.FreeGreen, BONUS.Fox]
const scoreMap = [10, 14, 16, 20]

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore: React.SFC<YellowScoreProps> = ({ onChange }: YellowScoreProps) => {
    const { checkedState, setChecked, bingoState, setSelection } = useGridSelection([
        [false, false, false, true],
        [false, false, true, false],
        [false, true, false, false],
        [true, false, false, false],
    ])

    useEffect(() => {
        const columnToScore = { 0: 10, 1: 14, 2: 16, 3: 20 }

        onChange(
            bingoState.columns.map((val) => columnToScore[val]),
            {
                fox: bingoState.rows.includes(3),
                plusOnes: bingoState.diagonal ? 1 : 0,
            }
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
                {bonusMapRight.map((bonus, index) => (
                    <BonusBox
                        key={index}
                        checked={bingoState.rows.includes(index)}
                        display={<BonusIcon type={bonus} />}
                        vertical
                        style={{ marginBottom: '11px' }}
                    />
                ))}
            </div>
            <div className='scorebottom'>
                {scoreMap.map((score, index) => (
                    <BonusBox
                        key={index}
                        checked={bingoState.columns.includes(index)}
                        display={score}
                    />
                ))}
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
