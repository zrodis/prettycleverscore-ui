import { render, fireEvent, screen, within } from '@testing-library/react'
import React from 'react'
import { YellowScore } from './YellowScore'

describe('YellowScore', () => {
    it('should render Boxes', () => {
        const { getAllByTestId } = render(<YellowScore onClick={() => {}} />)

        expect(getAllByTestId('box')).toHaveLength(8)
    })

    it('clicking a Boxes changes the state to selected', async () => {
        const handleClick = jest.fn()
        const { getAllByTestId } = render(<YellowScore onClick={handleClick} />)

        const box = getAllByTestId('box')[0]

        fireEvent.click(box)

        expect(within(box).getByTestId('selected')).toBeTruthy()
    })
    /*
    //this is the input checkbox version
    it('clicking a checkbox changes the state to checked', () => {
        const handleClick = jest.fn()
        const { getAllByRole } = render(<YellowScore onClick={handleClick} />)

        const box1 = getAllByRole('checkbox')[0]
        const box2 = getAllByRole('checkbox')[1]

        fireEvent.click(box1)

        // debug(box)

        expect(box2.checked).toBe(true)
    })
    */
})
