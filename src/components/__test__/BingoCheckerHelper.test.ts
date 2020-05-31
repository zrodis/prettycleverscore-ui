import {
    getRowMatches,
    getColumnsAsRows,
    getColumnMatches,
    getDiagonalMatch,
} from '../BingoCheckerHelper'

describe('getRowMatches', () => {
    it('should return false if empty', () => {
        expect(getRowMatches(null)).toEqual([])
        expect(getRowMatches([])).toEqual([])
        expect(getRowMatches([[], [], [], []])).toEqual([])
    })

    it('should return false if there are no rows of true', () => {
        const rows = [
            [true, true, false, true],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, true, false],
        ]
        expect(getRowMatches(rows)).toEqual([])
    })

    it('returns the row indexes where all values are true', () => {
        const rows = [
            [true],
            [false, false, true, false],
            [true, true, true, true],
            [true, true, true, true, true, true],
        ]
        expect(getRowMatches(rows)).toEqual([0, 2, 3])
    })
})

describe('getColumnsAsRows', () => {
    it('put the first index of each array in an array', () => {
        expect(
            getColumnsAsRows([
                [true, true, 0, 0],
                [true, 0, 0, 0],
                [true, 0, 0, 0],
                [true, 0, 0, 0],
            ])
        ).toEqual([
            [true, true, true, true],
            [true, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ])
    })

    it('still works when its not a square', () => {
        expect(getColumnsAsRows([[true, 0]])).toEqual([[true], [0]])
    })

    it('still works when its not a square and its not rectangular', () => {
        expect(
            getColumnsAsRows([
                [true, 0, 0],
                [true, 0],
            ])
        ).toEqual([[true, true], [0, 0], [0]])
    })
})

describe('columnChecker', () => {
    it('returns the column indexes where all values are true', () => {
        const rows = [
            [true, false, false, false],
            [true, false, false, false],
            [true, false, false, false],
            [true, false, false, false],
        ]
        expect(getColumnMatches(rows)).toEqual([0])
    })
})

describe('getDiagonalMatch', () => {
    it('should return false if no diagonal of true', () => {
        expect(
            getDiagonalMatch([
                [true, true, true],
                [false, false, false],
                [false, false, true],
            ])
        ).toEqual(false)
    })
    it('should return true if the top-left to bottom-right diagonal is all true', () => {
        expect(
            getDiagonalMatch([
                [true, false, false],
                [false, true, false],
                [false, false, true],
            ])
        ).toEqual(true)
    })
})
