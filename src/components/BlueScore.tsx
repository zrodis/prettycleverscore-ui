import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { COLOR } from '../constants/colors'
import { BingoState } from '../hooks/useGridSelection'
import { blueCheckedState } from '../recoil/atoms'
import { blueBingoState } from '../recoil/blueSelectors'
import { BONUS } from '../service/bonusConstants'
import { BonusIcon } from './BonusIcon'
import { BonusBox, Box } from './Box'

const bonusMapRight = [BONUS.Orange5, BONUS.FreeYellow, BONUS.Fox]
const bonusMapBottom = [BONUS.ReRoll, BONUS.FreeGreen, BONUS.Purple6, BONUS.PlusOne]

const scoreConfig: number[][] = [
    [null, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

export const BlueScore = () => {
    const [checkedState, setChecked] = useRecoilState<boolean[][]>(blueCheckedState)
    const bingoState = useRecoilValue<BingoState>(blueBingoState)

    const handleClick = (rowIndex: number, columnIndex: number) => {
        //recoil doesn't like the inner arrays to mutate... so they have to be re-created
        const checked = [...checkedState.map((row) => [...row])]
        checked[rowIndex][columnIndex] = !checked[rowIndex][columnIndex]
        setChecked(checked)
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
        </div>
    )
}
