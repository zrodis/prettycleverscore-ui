import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add, calculateBlue } from './service/score/scores'
import { BlueScore } from './components/BlueScore'

function App() {
    const [yellowScore, setYellowScore] = useState(0)
    const [blueScore, setBlueScore] = useState(0)

    const handleYellowScoreUpdate = (values: number[]) => {
        setYellowScore(add({ values }))
    }
    const handleBlueScoreUpdate = (quantity: number) => {
        setBlueScore(calculateBlue({ quantity }))
    }

    return (
        <div className='App'>
            <YellowScore onChange={handleYellowScoreUpdate} />
            <BlueScore onChange={handleBlueScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
            <div>{` Blue Total: ${blueScore}`}</div>
        </div>
    )
}

export default App
