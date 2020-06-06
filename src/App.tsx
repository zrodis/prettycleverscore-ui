import React, { useState, useEffect } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add, calculateGreen, calculateOrange, getFoxCount } from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import { calculateBlue } from './service/score/blue'
import { GreenScore } from './components/GreenScore'
import { OrangeScore } from './components/OrangeScore'
import { PurpleScore } from './components/PurpleScore'
import { calulateTotalScore } from './service/score/totalScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)
    const [purpleScore, setPurpleScore] = useState(0)
    const [foxState, setFoxState] = useState({
        yellow: false,
        blue: false,
        green: false,
        orange: false,
        purple: false,
    })

    const handleYellowScoreUpdate = (values: number[], fox: boolean) => {
        setFoxState({ ...foxState, yellow: fox })
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number, fox: boolean) => {
        setFoxState({ ...foxState, blue: fox })
        setBlueScore(calculateBlue({ quantity }))
    }
    const handleGreenScoreUpdate = (quantity: number, fox: boolean) => {
        setFoxState({ ...foxState, green: fox })
        setGreenScore(calculateGreen({ quantity }))
    }
    const handleOrangeScoreUpdate = (values: number[], fox: boolean) => {
        setFoxState({ ...foxState, orange: fox })
        setOrangeScore(calculateOrange({ values }))
    }
    const handlePurpleScoreUpdate = (values: number[], fox: boolean) => {
        setFoxState({ ...foxState, purple: fox })
        setPurpleScore(add({ values }))
    }

    return (
        <div className='App'>
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
            <div>{` Foxes:${getFoxCount(foxState)}`}</div>
            <div>{` Total:${calulateTotalScore({
                yellowScore,
                blueScore,
                greenScore,
                orangeScore,
                purpleScore,
                foxCount: getFoxCount(foxState),
            })}`}</div>
        </div>
    )
}

export default App
