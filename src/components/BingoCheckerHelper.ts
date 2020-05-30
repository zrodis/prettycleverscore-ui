export const getRowMatches = (rows: boolean[][]): number[] => {
    let result = []

    if (!rows || rows.length === 0) {
        return result
    }

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex]
        if (!row || row.length === 0) {
            continue
        }

        if (row.every((value) => value)) {
            result.push(rowIndex)
        }
    }

    return result
}

export const getColumnMatches = (rows: boolean[][]): number[] => {
    return getRowMatches(getColumnsAsRows(rows))
}

export const getColumnsAsRows = (rows: any[][]): any[][] => {
    const columnsAll = Array.from(rows[0], () => [])

    rows.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            columnsAll[columnIndex][rowIndex] = rows[rowIndex][columnIndex]
        })
    })

    return columnsAll
}
