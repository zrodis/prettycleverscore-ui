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
