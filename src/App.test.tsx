import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('YellowScore', () => {
    const { getByTestId } = render(<App />)
    const linkElement = getByTestId(/YellowScore/i)
    expect(linkElement).toBeInTheDocument()
})
