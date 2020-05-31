import { render, fireEvent, screen, within, act } from '@testing-library/react'
import React from 'react'
import { YellowScore } from './YellowScore'

describe('YellowScore', () => {
    it('should render Boxes', () => {
        const { getAllByTestId } = render(<YellowScore onChange={() => {}} />)

        expect(getAllByTestId('box')).toHaveLength(25)
    })

    it('clicking a Boxes changes the state to selected', async () => {
        const handleClick = jest.fn()
        const { getAllByTestId } = render(<YellowScore onChange={handleClick} />)

        const box = getAllByTestId('box')[0]

        fireEvent.click(box)

        act(() => expect(handleClick).toHaveBeenCalled())
        expect(within(box).getByTestId('selected')).toBeTruthy()
    })
    /*
    //this is the input checkbox version
    it('clicking a checkbox changes the state to checked', () => {
        const handleClick = jest.fn()
        const { getAllByRole } = render(<YellowScore onClick={handleClick} />)

        const [box1, box2] = getAllByRole('checkbox')

        fireEvent.click(box1)

        // debug(box)

        expect(box2.checked).toBe(true)
    })
    */
})
