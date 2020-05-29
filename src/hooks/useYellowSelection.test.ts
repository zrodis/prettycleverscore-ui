import { renderHook, act } from '@testing-library/react-hooks'
import { useYellowSelection } from './useYellowSelection'

test('when setSelection is called with column and row indexes, checkedState is updated, and bingoState is calculated and updated', async () => {
    const { result } = renderHook(() =>
        useYellowSelection([
            [true, false],
            [false, false],
        ])
    )

    act(() => {
        result.current.setSelection({ rowIndex: 0, columnIndex: 1 })
    })

    await expect(result.current.checkedState).toEqual([
        [true, true],
        [false, false],
    ])

    console.log('checkedState', result.current.checkedState)
    await expect(result.current.bingoState).toEqual({ columns: [], rows: [0] })
})
