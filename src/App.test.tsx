import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Enzyme from 'enzyme'
import { YellowScore } from './components/YellowScore'
import * as Scores from './service/score/scores'
import { BlueScore } from './components/BlueScore'
import * as Blue from './service/score/blue'

jest.spyOn(Scores, 'add')
jest.spyOn(Blue, 'calculateBlue')

afterEach(() => {
    jest.resetAllMocks()
})

test('YellowScore', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId(/YellowScore/i)).toBeInTheDocument()
})

describe('score component integration (useState in Enzyme shallow)', () => {
    test('YellowScore onChange: add() is called and Yellow Total gets updated', () => {
        ;(Scores.add as any).mockReturnValue(4)
        const shallowRender = Enzyme.shallow(<App />)

        expect(shallowRender.text()).toContain('Yellow Total: 0')

        shallowRender.find(YellowScore).props().onChange([2, 2])

        expect(Scores.add).toHaveBeenCalled()
        expect(shallowRender.text()).toContain('Yellow Total: 4')
    })

    test('BlueScore onChange: calculateBlue() is called and Blue Total gets updated', () => {
        ;(Blue.calculateBlue as any).mockReturnValue(7)

        const shallowRender = Enzyme.shallow(<App />)

        expect(shallowRender.text()).toContain('Blue Total: 0')

        shallowRender.find(BlueScore).props().onChange(4)

        expect(Blue.calculateBlue).toHaveBeenCalled()
        expect(shallowRender.text()).toContain('Blue Total: 7')
    })
})
