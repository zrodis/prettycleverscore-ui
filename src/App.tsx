import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add, calculateGreen } from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import { calculateBlue } from './service/score/blue'
import { GreenScore } from './components/GreenScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)

    const handleYellowScoreUpdate = (values: number[]) => {
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number) => {
        setBlueScore(calculateBlue({ quantity }))
    }
    const handleGreenScoreUpdate = (quantity: number) => {
        setGreenScore(calculateGreen({ quantity }))
    }

    return (
        <div className='App'>
            <YellowScore onChange={handleYellowScoreUpdate} />
            <BlueScore onChange={handleBlueScoreUpdate} />
            <GreenScore onChange={handleGreenScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
            <div>{` Green Total: ${greenScore}`}</div>
        </div>
    )
}

export default App
