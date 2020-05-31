import React from 'react'
import { BlueScore } from './BlueScore'
import { render } from '@testing-library/react'
import Enzyme from 'enzyme'
import { act } from 'react-dom/test-utils'

describe('BlueScore', () => {
    it('should render Boxes', () => {
        const { getAllByTestId } = render(<BlueScore onChange={() => {}} />)

        expect(getAllByTestId('box')).toHaveLength(18)
        // expect(getAllByTestId('bonus-box')).toHaveLength(7)
    })
})

describe('BlueScore with useState and useEffect hooks in Enzyme', () => {
    it('onChange gets called when click', () => {
        const onChange = jest.fn()
        const render = Enzyme.mount(<BlueScore onChange={onChange} />)

        act(() => render.find('Box').get(0).props.onClick())

        expect(onChange).toHaveBeenCalled()
        expect(render.find('BonusBox').exists())
        expect(render.find('Box').exists())
    })
})
