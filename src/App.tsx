import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add } from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import { calculateBlue } from './service/score/blue'
import { GreenScore } from './components/GreenScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)

    const handleYellowScoreUpdate = (values: number[]) => {
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number) => {
        setBlueScore(calculateBlue({ quantity }))
    }
    const handleGreenScoreUpdate = () => {}

    return (
        <div className='App'>
            <YellowScore onChange={handleYellowScoreUpdate} />
            <BlueScore onChange={handleBlueScoreUpdate} />
            <GreenScore onChange={handleGreenScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
        </div>
    )
}

export default App
