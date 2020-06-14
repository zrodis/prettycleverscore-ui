import React, { useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { useGridSelection } from '../hooks/useGridSelection'
import { countBlueSelection } from '../service/score/blue'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/bonusConstants'
import { Bonuses } from '../service/bonus'

interface BlueScoreProps {
    onChange(quantity: number, bonuses: Bonuses): void
}

const bonusMapRight = [BONUS.Orange5, BONUS.FreeYellow, BONUS.Fox]
const bonusMapBottom = [BONUS.ReRoll, BONUS.FreeGreen, BONUS.Purple6, BONUS.PlusOne]

const scoreConfig: number[][] = [
    [null, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

export const BlueScore = ({ onChange }: BlueScoreProps) => {
    const { checkedState, bingoState, setSelection } = useGridSelection([
        [true, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ])

    useEffect(() => {
        const fox = bingoState.rows.includes(2)
        const plusOnes = bingoState.columns.includes(3) ? 1 : 0
        const reRolls = bingoState.columns.includes(0) ? 1 : 0

        onChange(countBlueSelection(checkedState), { fox, plusOnes, reRolls })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedState, bingoState.rows])

    const handleClick = (rowIndex: number, columnIndex: number) => {
        setSelection({ rowIndex, columnIndex })
    }

    return (
        <div
            data-testid='BlueScore'
            className='scorebox-container'
            style={{ backgroundColor: COLOR.blue }}
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
                                    renderBlank={column === null}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <div className='scoreright'>
                {bonusMapRight.map((bonus, index) => {
                    return (
                        <BonusBox
                            key={index}
                            checked={bingoState.rows.includes(index)}
                            display={<BonusIcon type={bonus} />}
                            vertical
                            style={{ marginBottom: '11px' }}
                        />
                    )
                })}
            </div>
            <div className='scorebottom'>
                {bonusMapBottom.map((bonus, index) => {
                    return (
                        <BonusBox
                            key={index}
                            checked={bingoState.columns.includes(index)}
                            display={<BonusIcon type={bonus} />}
                        />
                    )
                })}
            </div>
        </div>
    )
}
