import React from 'react'
import { render, fireEvent, within } from '@testing-library/react'
import { GreenScore } from './GreenScore'

describe('GreenScore', () => {
    it('should render boxes', () => {
        const { getAllByTestId } = render(<GreenScore onChange={jest.fn()} />)

        expect(getAllByTestId('box')).toHaveLength(11)
    })

    it('should select the first unselected box from the left when an unselected box is clicked', () => {
        const { getAllByTestId } = render(<GreenScore onChange={jest.fn()} />)

        fireEvent.click(getAllByTestId('box')[10])

        expect(within(getAllByTestId('box')[0]).getByTestId('selected')).toBeTruthy()
        expect(within(getAllByTestId('box')[10]).getByTestId('deselected')).toBeTruthy()
    })

    it('should deselect the first selected box from the right when a selected box is clicked', () => {
        const { getAllByTestId } = render(<GreenScore onChange={jest.fn()} />)

        const Box10 = getAllByTestId('box')[10]
        const Box2 = getAllByTestId('box')[2]

        fireEvent.click(Box10)
        fireEvent.click(Box10)
        fireEvent.click(Box10)

        expect(within(Box2).getByTestId('selected')).toBeTruthy()

        fireEvent.click(getAllByTestId('box')[0])

        expect(within(Box2).getByTestId('deselected')).toBeTruthy()
    })
})
