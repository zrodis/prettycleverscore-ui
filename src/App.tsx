import React from 'react'

import './App.css'
import { YellowScore } from './components/YellowScore'

function App() {
    const handleBoxToggle = () => {
        console.log('handleBoxToggle')
    }
    return (
        <div className='App'>
            <YellowScore onClick={handleBoxToggle} />
        </div>
    )
}

export default App
