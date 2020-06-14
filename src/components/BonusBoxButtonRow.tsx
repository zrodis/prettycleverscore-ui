import React, { useState } from 'react'
import { Box } from './Box'
import { BonusState } from '../service/bonus'
import { BonusIcon } from './BonusIcon'
import { BONUS } from '../service/bonusConstants'

export const BonusBoxButtonRow = (props: {
    bonusState: BonusState
    type: BONUS
    func: (color) => number
}) => {
    const [reRollState, setRerollState] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])

    const totalRerolls = Object.values(props.bonusState).reduce((total, color) => {
        if (props.func(color)) {
            return total + props.func(color)
        }
        return total
    }, 0)

    return (
        <div>
            {reRollState.map((checked, i) => (
                <Box
                    key={i}
                    checked={checked}
                    display={i < totalRerolls && <BonusIcon type={props.type} />}
                    onClick={() => {
                        const state = [...reRollState]
                        state[i] = !state[i]
                        setRerollState(state)
                    }}
                />
            ))}
        </div>
    )
}
