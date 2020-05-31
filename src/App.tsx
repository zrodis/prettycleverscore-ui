import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add, calculateGreen, calculateOrange } from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import { calculateBlue } from './service/score/blue'
import { GreenScore } from './components/GreenScore'
import { OrangeScore } from './components/OrangeScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)
    const [greenScore, setGreenScore] = useState(0)
    const [orangeScore, setOrangeScore] = useState(0)

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

    return (
        <div className='App'>
            <YellowScore onChange={handleYellowScoreUpdate} />
            <BlueScore onChange={handleBlueScoreUpdate} />
            <GreenScore onChange={handleGreenScoreUpdate} />
            <OrangeScore onChange={handleOrangeScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
            <div>{` Green Total: ${greenScore}`}</div>
            <div>{` Orange Total: ${orangeScore}`}</div>
        </div>
    )
}

export default App
