//@TODO save to local storage

import React, { useState, useCallback } from 'react'
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
import { useRecoilValue } from 'recoil'
import { yellow } from './recoil/yellowSelectors'
import { bonusTotals } from './recoil/globalSelectors'

const turnsBonusMap = [BONUS.ReRoll, BONUS.PlusOne, BONUS.ReRoll, BONUS.FreeBlue, null, null]

function App() {
    const state = {
        yellowScore: useRecoilValue(yellow.score),
        bonus: useRecoilValue<BonusState>(bonusTotals),
    }

    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)
    const [purpleScore, setPurpleScore] = useState(0)
    const [turnsState, setTurnsState] = useState([false, false, false, false, false, false])

    const bonusState = useRecoilValue<BonusState>(bonusTotals)
    // const [bonusState, setBonusState] = useState<BonusState>({
    //     yellow: { fox: false, plusOnes: 0, reRolls: 0 },
    //     blue: { fox: false, plusOnes: 0, reRolls: 0 },
    //     green: { fox: false, plusOnes: 0, reRolls: 0 },
    //     orange: { fox: false, plusOnes: 0, reRolls: 0 },
    //     purple: { fox: false, plusOnes: 0, reRolls: 0 },
    //     turns: { fox: false, plusOnes: 0, reRolls: 0 },
    // })

    const handleBlueScoreUpdate = (quantity: number, bonuses: Bonuses) => {
        // setBonusState({ ...bonusState, blue: bonuses })
        // setBlueScore(calculateBlue({ quantity }))
    }
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
                <BlueScore onChange={handleBlueScoreUpdate} />
            </div>
            <GreenScore onChange={handleGreenScoreUpdate} />
            <OrangeScore onChange={handleOrangeScoreUpdate} />
            <PurpleScore onChange={handlePurpleScoreUpdate} />
            <div>{` Yellow Total: ${state.yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
            <div>{` Green Total: ${greenScore}`}</div>
            <div>{` Orange Total: ${orangeScore}`}</div>
            <div>{` Purple Total: ${purpleScore}`}</div>
            <div>{` Foxes:${getFoxCount(state.bonus)}`}</div>
            <div>{` Total:${calulateTotalScore({
                yellowScore: state.yellowScore,
                blueScore,
                greenScore,
                orangeScore,
                purpleScore,
                foxCount: getFoxCount(state.bonus),
            })}`}</div>
        </div>
    )
}

export default App
