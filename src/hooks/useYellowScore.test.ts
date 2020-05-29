import { renderHook } from '@testing-library/react-hooks'
import { useYellowScore } from './useYellowScore'

test('should trigger onChange with the columns mapped to related score values', () => {
    const onChange = jest.fn()
    renderHook(() => useYellowScore({ onChange, columns: [0, 1, 2, 3] }))

    expect(onChange).toHaveBeenCalledWith([10, 14, 16, 20])
})
