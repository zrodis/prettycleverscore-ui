import React, { useState, useEffect } from 'react'
import { Box } from './Box'
import { Select, MenuItem } from '@material-ui/core'
import { BONUS } from '../service/score/bonusConstants'
import { COLOR } from '../constants/colors'
import { BonusIcon } from './BonusIcon'

const initialScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const bonusMap = [
    null,
    null,
    BONUS.ReRoll,
    BONUS.FreeBlue,
    BONUS.PlusOne,
    BONUS.FreeYellow,
    BONUS.Fox,
    BONUS.ReRoll,
    BONUS.FreeGreen,
    BONUS.Orange6,
    BONUS.PlusOne,
]

interface PurpleScoreProps {
    onChange(inputValues: number[]): void
}

const DieSelect = ({ value, onChange }) => {
    return (
        <Select
            labelId='demo-simple-select-required-label'
            id='demo-simple-select-required'
            value={value}
            onChange={onChange}
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

export const PurpleScore = ({ onChange }: PurpleScoreProps) => {
    const [inputState, setInput] = useState(initialScore)

    const handleChange = ({ target }: React.ChangeEvent<{ value: number }>, index) => {
        const input = [...inputState]

        input[index] = target.value

        setInput(input)
    }

    useEffect(() => {
        onChange(inputState)
    }, [inputState, onChange])

    return (
        <div
            data-testid='Purple'
            style={{
                backgroundColor: COLOR.purple,
                display: 'inline-block',
                padding: '4px',
                margin: '3px auto',
                borderRadius: '4px',
            }}
        >
            {inputState.map((value, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: 'inline-block',
                        }}
                    >
                        <Box
                            onClick={null}
                            checked={false}
                            display={
                                <DieSelect
                                    value={value}
                                    onChange={(event) => handleChange(event, index)}
                                />
                            }
                        />
                        <BonusIcon type={bonusMap[index]} />
                    </div>
                )
            })}
        </div>
    )
}
