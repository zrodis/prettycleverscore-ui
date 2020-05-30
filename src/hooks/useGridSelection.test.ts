import { renderHook, act } from '@testing-library/react-hooks'
import { useGridSelection } from './useGridSelection'

test('when setSelection is called with column and row indexes, checkedState is updated, and bingoState is calculated and updated', async () => {
    const { result } = renderHook(() =>
        useGridSelection([
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

    await expect(result.current.bingoState).toEqual({ columns: [], rows: [0] })
})
