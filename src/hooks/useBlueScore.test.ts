import { renderHook } from '@testing-library/react-hooks'
import { useBlueScore } from './useBlueScore'

test('it should count the number of trues in the checkedState, minus one (top left is filler and doesnt count)', () => {
    const onChange = jest.fn()
    renderHook(() =>
        useBlueScore({
            onChange,
            checkedState: [
                [true, false, false, false],
                [true, false, false, false],
                [true, false, false, false],
            ],
        })
    )

    expect(onChange).toHaveBeenCalledWith(2)
})
