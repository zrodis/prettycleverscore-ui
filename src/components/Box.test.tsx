import { render, fireEvent, within } from '@testing-library/react'
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
        expect(getByTestId('selected').style.backgroundColor).toBe('rgb(51, 51, 51)')
    })

    it('renders deselected when checked is false', () => {
        const { getByTestId } = render(<Box onClick={jest.fn} checked={false} />)

        expect(getByTestId('deselected')).toBeTruthy()
    })

    it('can render the display prop as a string', () => {
        const { getByTestId } = render(
            <Box onClick={jest.fn} checked={false} display={'display text'} />
        )

        expect(getByTestId('deselected').textContent).toContain('display text')
    })

    it('can render the display prop as a component', () => {
        const Mock = () => <div data-testid='Mock'>mock</div>

        const { getByTestId } = render(<Box onClick={jest.fn} checked={false} display={<Mock />} />)

        expect(getByTestId(/Mock/i)).toBeTruthy()
    })
})
