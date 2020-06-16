//@TODO save to local storage

import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import './App.css'
import { BlueScore } from './components/BlueScore'
import { BonusBoxButtonRow } from './components/BonusBoxButtonRow'
import { BonusIcon } from './components/BonusIcon'
import { Box } from './components/Box'
import { GreenScore } from './components/GreenScore'
import { OrangeScore } from './components/OrangeScore'
import { PurpleScore } from './components/PurpleScore'
import { YellowScore } from './components/YellowScore'
import { blue } from './recoil/blueSelectors'
import { bonusTotals } from './recoil/globalSelectors'
import { yellow } from './recoil/yellowSelectors'
import { Bonuses, BonusState } from './service/bonus'
import { BONUS } from './service/bonusConstants'
import { getFoxCount } from './service/score/scores'
import { calulateTotalScore } from './service/score/totalScore'

const turnsBonusMap = [BONUS.ReRoll, BONUS.PlusOne, BONUS.ReRoll, BONUS.FreeBlue, null, null]

function App() {
    const state = {
        yellowScore: useRecoilValue(yellow.score),
        blueScore: useRecoilValue(blue.score),
        bonus: useRecoilValue<BonusState>(bonusTotals),
    }

    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)
    const [purpleScore, setPurpleScore] = useState(0)
    const [turnsState, setTurnsState] = useState([false, false, false, false, false, false])

    const handleGreenScoreUpdate = (quantity: number, bonuses: Bonuses) => {
        // setBonusState({ ...bonusState, green: bonuses })
        // setGreenScore(calculateGreen({ quantity }))
    }
    const handleOrangeScoreUpdate = (values: number[], bonuses: Bonuses) => {
        // setBonusState({ ...bonusState, orange: bonuses })
        // setOrangeScore(calculateOrange({ values }))
    }
    const handlePurpleScoreUpdate = (values: number[], bonuses: Bonuses) => {
        // setBonusState({ ...bonusState, purple: bonuses })
        // setPurpleScore(add({ values }))
    }

    const handleTurnBonus = (index) => {
        const state = [...turnsState]
        state[index] = !state[index]
        setTurnsState(state)
        // setBonusState({
        //     ...bonusState,
        //     turns: calculateBonusesForRow(state, turnsBonusMap),
        // })
    }

    return (
        <div className='App'>
            <div style={{ display: 'inline-block' }}>
                <div>turns:</div>
                {turnsState.map((checked, index) => (
                    <div key={index} style={{ display: 'inline-block' }}>
                        {index + 1}
                        <Box
                            checked={checked}
                            display={<BonusIcon type={turnsBonusMap[index]} />}
                            onClick={() => handleTurnBonus(index)}
                        />
                    </div>
                ))}
            </div>
            <BonusBoxButtonRow
                bonusState={state.bonus}
                type={BONUS.ReRoll}
                func={(color) => color.reRolls}
            />
            <BonusBoxButtonRow
                bonusState={state.bonus}
                type={BONUS.PlusOne}
                func={(color) => color.plusOnes}
            />
            <div style={{ display: 'inline-block' }}>
                <YellowScore />
                <BlueScore />
            </div>
            <GreenScore onChange={handleGreenScoreUpdate} />
            <OrangeScore />
            <PurpleScore onChange={handlePurpleScoreUpdate} />
            <div>{` Yellow Total: ${state.yellowScore}`}</div>
            <div>{` Blue Total: ${state.blueScore}`}</div>
            <div>{` Green Total: ${greenScore}`}</div>
            <div>{` Orange Total: ${orangeScore}`}</div>
            <div>{` Purple Total: ${purpleScore}`}</div>
            <div>{` Foxes:${getFoxCount(state.bonus)}`}</div>
            <div>{` Total:${calulateTotalScore({
                yellowScore: state.yellowScore,
                blueScore: state.blueScore,
                greenScore,
                orangeScore,
                purpleScore,
                foxCount: getFoxCount(state.bonus),
            })}`}</div>
        </div>
    )
}

export default App
