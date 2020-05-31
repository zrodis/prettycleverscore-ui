export const add = ({ values }: { values: number[] }): number => {
    return values.reduce((total, num) => {
        return total + +num
    }, 0)
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

export const calculateOrange = ({ values }: { values: number[] }): number => {
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

export interface Quantity {
    quantity: number
}
