import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { Box } from './Box'

describe('Box', () => {
    it('gets clicked', () => {
        const handleClick = jest.fn()

        const { getByTestId } = render(<Box onClick={handleClick} checked={false} />)

        fireEvent.click(getByTestId('box'))

        expect(handleClick).toHaveBeenCalled()
    })

    it('renders selected when checked is true', () => {
        const { getByTestId } = render(<Box onClick={jest.fn} checked={true} />)

        expect(getByTestId('selected')).toBeTruthy()
    })

    it('renders deselected when checked is false', () => {
        const { getByTestId } = render(<Box onClick={jest.fn} checked={false} />)

        expect(getByTestId('deselected')).toBeTruthy()
    })
})
