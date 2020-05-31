import React from 'react'
import { BONUS } from '../service/score/bonusConstants'
import { COLOR } from '../constants/colors'
const {
    ReRoll,
    PlusOne,
    FreeYellow,
    FreeBlue,
    FreeGreen,
    Orange4,
    Orange5,
    Orange6,
    Purple6,
    Double,
    Triple,
    Fox,
} = BONUS

interface IconWrapperProps {
    children: React.ReactNode
    style?: any
}

const IconWrapper = ({ children, style }: IconWrapperProps) => (
    <div
        style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            color: 'black',
            textAlign: 'center',
            border: 'solid 2px #333',
            borderRadius: '5px',
            margin: '2px auto',
            fontSize: '17px',
            ...style,
        }}
    >
        {children}
    </div>
)

export const BonusIcon = ({ type }) => {
    switch (type) {
        case ReRoll:
            return <IconWrapper>RR</IconWrapper>
        case PlusOne:
            return <IconWrapper>+1</IconWrapper>
        case FreeYellow:
            return <IconWrapper style={{ backgroundColor: COLOR.yellow }}>X</IconWrapper>
        case FreeBlue:
            return <IconWrapper style={{ backgroundColor: COLOR.blue }}>X</IconWrapper>
        case FreeGreen:
            return <IconWrapper style={{ backgroundColor: COLOR.green }}>X</IconWrapper>
        case Orange4:
            return <IconWrapper style={{ backgroundColor: COLOR.orange }}>4</IconWrapper>
        case Orange5:
            return <IconWrapper style={{ backgroundColor: COLOR.orange }}>5</IconWrapper>
        case Orange6:
            return <IconWrapper style={{ backgroundColor: COLOR.orange }}>6</IconWrapper>
        case Purple6:
            return <IconWrapper style={{ backgroundColor: COLOR.purple }}>6</IconWrapper>
        case Double:
            return <IconWrapper>x2</IconWrapper>
        case Triple:
            return <IconWrapper>x3</IconWrapper>
        case Fox:
            return <IconWrapper style={{ color: 'red' }}>F</IconWrapper>
        default:
            return <div>?</div>
    }
}
