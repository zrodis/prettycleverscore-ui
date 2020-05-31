import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add, calculateGreen, calculateOrange } from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import { calculateBlue } from './service/score/blue'
import { GreenScore } from './components/GreenScore'
import { OrangeScore } from './components/OrangeScore'
import { PurpleScore } from './components/PurpleScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)
    const [purpleScore, setPurpleScore] = useState(0)

    const handleYellowScoreUpdate = (values: number[]) => {
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number) => {
        setBlueScore(calculateBlue({ quantity }))
    }
    const handleGreenScoreUpdate = (quantity: number) => {
        setGreenScore(calculateGreen({ quantity }))
    }
    const handleOrangeScoreUpdate = (values: number[]) => {
        setOrangeScore(calculateOrange({ values }))
    }
    const handlePurpleScoreUpdate = (values: number[]) => {
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
        </div>
    )
}

export default App
