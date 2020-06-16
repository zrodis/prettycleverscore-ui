import { atom } from 'recoil'

export const yellowCheckedState = atom({
    key: 'yellowCheckedState',
    default: [
        [false, false, false, true],
        [false, false, true, false],
        [false, true, false, false],
        [true, false, false, false],
    ],
})

export const blueCheckedState = atom({
    key: 'blueCheckedState',
    default: [
        [true, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
    ],
})
