import React from 'react'
import { BlueScore } from './BlueScore'
import { render } from '@testing-library/react'

describe('BlueScore', () => {
    it('should render Boxes', () => {
        const { getAllByTestId } = render(<BlueScore onChange={() => {}} />)

        expect(getAllByTestId('box')).toHaveLength(18)
        // expect(getAllByTestId('bonus-box')).toHaveLength(7)
    })
})
