import { Quantity } from './scores'

export const countBlueSelection = (checkedState) => {
    return checkedState.reduce((total, currentRow) => {
        let rowTotal = 0
        currentRow.forEach((checked) => {
            if (checked) rowTotal++
        })
        return total + rowTotal
    }, -1)
}

export const calculateBlue = ({ quantity }: Quantity): number => {
    function getPrevQuantity(currentQuantity) {
        if (currentQuantity <= 0) return 0
        return currentQuantity - 1
    }

    let total = 0
    let prevScore = 0
    for (let i = 0; i <= quantity; i++) {
        total = prevScore + getPrevQuantity(i)
        prevScore = prevScore === 0 ? 1 : total
    }
    return total
}
