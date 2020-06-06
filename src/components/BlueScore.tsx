import React, { useEffect } from 'react'
import { Box, BonusBox } from './Box'
import { useGridSelection } from '../hooks/useGridSelection'
import { countBlueSelection } from '../service/score/blue'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/score/bonusConstants'

interface BlueScoreProps {
    onChange(quantity: number, fox: boolean): void
}

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
        onChange(countBlueSelection(checkedState), fox)
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
                <BonusBox
                    checked={bingoState.rows.includes(0)}
                    display={<BonusIcon type={BONUS.Orange5} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(1)}
                    display={<BonusIcon type={BONUS.FreeYellow} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
                <BonusBox
                    checked={bingoState.rows.includes(2)}
                    display={<BonusIcon type={BONUS.Fox} />}
                    vertical
                    style={{ marginBottom: '11px' }}
                />
            </div>
            <div className='scorebottom'>
                <BonusBox
                    checked={bingoState.columns.includes(0)}
                    display={<BonusIcon type={BONUS.ReRoll} />}
                />
                <BonusBox
                    checked={bingoState.columns.includes(1)}
                    display={<BonusIcon type={BONUS.FreeGreen} />}
                />
                <BonusBox
                    checked={bingoState.columns.includes(2)}
                    display={<BonusIcon type={BONUS.Purple6} />}
                />
                <BonusBox
                    checked={bingoState.columns.includes(3)}
                    display={<BonusIcon type={BONUS.PlusOne} />}
                />
            </div>
        </div>
    )
}
