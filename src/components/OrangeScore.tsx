import React, { useState, useEffect } from 'react'
import { Box } from './Box'
import { Select, MenuItem } from '@material-ui/core'
import { BONUS } from '../service/score/bonusConstants'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'
import { ScoreRowContainer } from './ScoreRowContainer'

const initialScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const bonusMap = [
    null,
    null,
    BONUS.ReRoll,
    BONUS.Double,
    BONUS.FreeYellow,
    BONUS.PlusOne,
    BONUS.Double,
    BONUS.Fox,
    BONUS.Double,
    BONUS.Purple6,
    BONUS.Triple,
]

interface OrangeScoreProps {
    onChange(inputValues: number[], fox: boolean): void
}

const DieSelect = ({ value, onChange, bonus }) => {
    const calculateDisplay = (): any => {
        let calculatedValue

        switch (bonus) {
            case BONUS.Double:
                calculatedValue = value * 2
                break
            case BONUS.Triple:
                calculatedValue = value * 3
                break
            default:
                calculatedValue = value
        }

        if (calculatedValue === 0) {
            return ''
        }

        return <span>{calculatedValue}</span>
    }

    return (
        <Select
            labelId='demo-simple-select-required-label'
            id='demo-simple-select-required'
            value={value}
            onChange={onChange}
            renderValue={calculateDisplay}
        >
            <MenuItem value={0}>{''}</MenuItem>
            <MenuItem value={1}>{1}</MenuItem>
            <MenuItem value={2}>{2}</MenuItem>
            <MenuItem value={3}>{3}</MenuItem>
            <MenuItem value={4}>{4}</MenuItem>
            <MenuItem value={5}>{5}</MenuItem>
            <MenuItem value={6}>{6}</MenuItem>
        </Select>
    )
}

export const OrangeScore = ({ onChange }: OrangeScoreProps) => {
    const [inputState, setInput] = useState(initialScore)

    const handleChange = ({ target }: React.ChangeEvent<{ value: number }>, index) => {
        const input = [...inputState]

        input[index] = target.value

        setInput(input)
    }
    useEffect(() => {
        const fox = inputState[7] !== 0
        onChange(inputState, fox)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputState])

    return (
        <ScoreRowContainer testId='OrangeScore' color={COLOR.orange}>
            {inputState.map((value, index) => {
                return (
                    <div key={index} style={{ display: 'inline-block' }}>
                        <Box
                            checked={false}
                            display={
                                <DieSelect
                                    value={value}
                                    onChange={(event) => handleChange(event, index)}
                                    bonus={bonusMap[index]}
                                />
                            }
                        />
                        <BonusIcon type={bonusMap[index]} />
                    </div>
                )
            })}
        </ScoreRowContainer>
    )
}
