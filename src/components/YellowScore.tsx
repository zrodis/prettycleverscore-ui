import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { COLOR } from '../constants/colors'
import { BingoState } from '../hooks/useGridSelection'
import { yellowCheckedState } from '../recoil/atoms'
import { yellowBingoState } from '../recoil/yellowSelectors'
import { BONUS } from '../service/bonusConstants'
import { BonusIcon } from './BonusIcon'
import { BonusBox, Box } from './Box'

const bonusMapRight = [BONUS.FreeBlue, BONUS.Orange4, BONUS.FreeGreen, BONUS.Fox]
const scoreMap = [10, 14, 16, 20]

const scoreConfig: number[][] = [
    [3, 6, 5, 0],
    [2, 1, 0, 5],
    [1, 0, 2, 4],
    [0, 3, 4, 6],
]

export const YellowScore = () => {
    const [checkedState, setChecked] = useRecoilState<boolean[][]>(yellowCheckedState)
    const bingoState = useRecoilValue<BingoState>(yellowBingoState)

    const handleClick = (rowIndex: number, columnIndex: number) => {
        //recoil doesn't like the inner arrays to mutate... so they have to be re-created
        const checked = [...checkedState.map((row) => [...row])]
        checked[rowIndex][columnIndex] = !checked[rowIndex][columnIndex]
        setChecked(checked)
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
