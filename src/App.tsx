import React, { useState } from 'react'
import './App.css'
import { YellowScore } from './components/YellowScore'
import { add } from './service/score/scores'

function App() {
    const [yellowScore, setYellowScore] = useState(0)

    const handleScoreUpdate = (update: number[]) => {
        setYellowScore(add({ values: update }))
        console.log('handleScoreUpdate', yellowScore)
    }

    return (
        <div className='App'>
            <YellowScore onClick={handleScoreUpdate} />
            <div>{` Yellow Total: ${yellowScore}`}</div>
        </div>
    )
}

export default App
