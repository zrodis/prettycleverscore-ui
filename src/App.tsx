//@todo save to local storage

import React, { useState } from 'react'
import './App.css'
import { BlueScore } from './components/BlueScore'
import { GreenScore } from './components/GreenScore'
import { OrangeScore } from './components/OrangeScore'
import { PurpleScore } from './components/PurpleScore'
import { BonusBoxButtonRow } from './components/BonusBoxButtonRow'
import { YellowScore } from './components/YellowScore'
import { Bonuses, BonusState, calculateBonusesForRow } from './service/bonus'
import { BONUS } from './service/bonusConstants'
import { calculateBlue } from './service/score/blue'
import { add, calculateGreen, calculateOrange, getFoxCount } from './service/score/scores'
import { calulateTotalScore } from './service/score/totalScore'
import { BonusIcon } from './components/BonusIcon'
import { Box } from './components/Box'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)
    const [purpleScore, setPurpleScore] = useState(0)
    const [bonusState, setBonusState] = useState<BonusState>({
        yellow: { fox: false, plusOnes: 0, reRolls: 0 },
        blue: { fox: false, plusOnes: 0, reRolls: 0 },
        green: { fox: false, plusOnes: 0, reRolls: 0 },
        orange: { fox: false, plusOnes: 0, reRolls: 0 },
        purple: { fox: false, plusOnes: 0, reRolls: 0 },
        turns: { fox: false, plusOnes: 0, reRolls: 0 },
    })

    const handleYellowScoreUpdate = (values: number[], bonuses: Bonuses) => {
        setBonusState({ ...bonusState, yellow: bonuses })
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number, bonuses: Bonuses) => {
        setBonusState({ ...bonusState, blue: bonuses })
        setBlueScore(calculateBlue({ quantity }))
    }
    const handleGreenScoreUpdate = (quantity: number, bonuses: Bonuses) => {
        setBonusState({ ...bonusState, green: bonuses })
        setGreenScore(calculateGreen({ quantity }))
    }
    const handleOrangeScoreUpdate = (values: number[], bonuses: Bonuses) => {
        setBonusState({ ...bonusState, orange: bonuses })
        setOrangeScore(calculateOrange({ values }))
    }
    const handlePurpleScoreUpdate = (values: number[], bonuses: Bonuses) => {
        setBonusState({ ...bonusState, purple: bonuses })
        setPurpleScore(add({ values }))
    }

    const turnsBonusMap = [BONUS.ReRoll, BONUS.PlusOne, BONUS.ReRoll, BONUS.FreeBlue, null, null]
    const [turnsState, setTurnsState] = useState([false, false, false, false, false, false])
    return (
        <div className='App'>
            <div style={{ display: 'inline-block' }}>
                {turnsState.map((checked, i) => (
                    <Box
                        key={i}
                        checked={checked}
                        display={<BonusIcon type={turnsBonusMap[i]} />}
                        onClick={() => {
                            const state = [...turnsState]
                            state[i] = !state[i]
                            setTurnsState(state)
                            setBonusState({
                                ...bonusState,
                                turns: calculateBonusesForRow(state, turnsBonusMap),
                            })
                        }}
                    />
                ))}
            </div>
            <BonusBoxButtonRow
                bonusState={bonusState}
                type={BONUS.ReRoll}
                func={(color) => color.reRolls}
            />
            <BonusBoxButtonRow
                bonusState={bonusState}
                type={BONUS.PlusOne}
                func={(color) => color.plusOnes}
            />
            <div style={{ display: 'inline-block' }}>
                <YellowScore onChange={handleYellowScoreUpdate} />
                <BlueScore onChange={handleBlueScoreUpdate} />
            </div>
            <GreenScore onChange={handleGreenScoreUpdate} />
            <OrangeScore onChange={handleOrangeScoreUpdate} />
            <PurpleScore onChange={handlePurpleScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
            <div>{` Green Total: ${greenScore}`}</div>
            <div>{` Orange Total: ${orangeScore}`}</div>
            <div>{` Purple Total: ${purpleScore}`}</div>
            <div>{` Foxes:${getFoxCount(bonusState)}`}</div>
            <div>{` Total:${calulateTotalScore({
                yellowScore,
                blueScore,
                greenScore,
                orangeScore,
                purpleScore,
                foxCount: getFoxCount(bonusState),
            })}`}</div>
        </div>
    )
}

export default App
