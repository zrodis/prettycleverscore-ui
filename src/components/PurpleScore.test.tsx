import React from 'react'
import {
    render,
    fireEvent,
    within,
    screen,
    getByRole as globalGetByRole,
} from '@testing-library/react'
import { PurpleScore, DieSelect } from './PurpleScore'

describe('PurpleScore DieSelect', () => {
    it('only has MenuItems for values above the previous', () => {
        const onChange = jest.fn()
        const { getAllByTestId, container, debug, getByRole } = render(
            <DieSelect value={4} previousValue={3} onChange={onChange} />
        )

        const DieSelect0 = within(getAllByTestId('box')[0]).getByDisplayValue('0')

        // fireEvent.click(DieSelect0, { target: { value: 5 } })

        // expect(DieSelect0).toHaveAttribute('value', '5')

        // const DieSelect1 = within(getAllByTestId('box')[1]).getByDisplayValue('0')
        // const DieSelect1Dropdown = within(getAllByTestId('box')[1]).getByRole('button')

        const but = getByRole('button')
        const but2 = getByRole('input')
        fireEvent.click(but2)
        debug(container)

        expect(onChange).toHaveBeenCalled()
        // const ListBox = screen.getByRole('presentation')

        // expect(ListBox).toBeTruthy()
    })
})
