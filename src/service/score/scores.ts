export const add = ({ values }): number => {
    return values.reduce((total, num) => {
        return total + +num
    }, 0)
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

export const calculateGreen = ({ quantity }: Quantity): number => {
    let total = 0
    let modifier = 0
    for (let i = 0; i <= quantity; i++) {
        total += modifier
        modifier++
    }
    return total
}

export const calculateOrange = ({ values }): number => {
    return values.reduce((total, num, index) => {
        if (index === 3 || index === 6 || index === 8) {
            num *= 2
        }

        if (index === 10) {
            num *= 3
        }

        return total + +num
    }, 0)
}

interface Quantity {
    quantity: number
}
