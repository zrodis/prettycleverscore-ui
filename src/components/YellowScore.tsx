import React, { useState } from 'react'

interface BoxProps {
    onClick(): void
    checked: boolean
    display?: number
}

const Box = (props: BoxProps) => (
    <div
        onClick={props.onClick}
        data-testid={'box'}
        style={{
            display: 'inline-block',
            width: '35px',
            height: '35px',
            margin: '4px',
            textAlign: 'center',
            fontSize: '1.8em',
            border: 'solid 2px grey',
            borderRadius: 5,
            cursor: 'pointer',
        }}
    >
        <div style={{ width: '100%', height: '100%' }}>
            {props.checked ? (
                <div
                    data-testid='selected'
                    style={{ width: '100%', height: '100%', backgroundColor: '#333' }}
                >{`${props.display || ''}`}</div>
            ) : (
                <div data-testid='deselected' style={{ width: '100%', height: '100%' }}>{`${
                    props.display || ''
                }`}</div>
            )}
        </div>
    </div>
)

export const YellowScore = (props) => {
    const [checked, onChecked] = useState(false)

    const handleClick = () => {
        onChecked(!checked)
        props.onClick()
    }

    return (
        <div data-testid='YellowScore'>
            <div>
                <Box onClick={handleClick} checked={checked} display={3} />
                <Box onClick={handleClick} checked={checked} display={3} />
                <Box onClick={handleClick} checked={checked} display={3} />
                <Box onClick={handleClick} checked={checked} display={3} />
            </div>
            <div>
                <Box onClick={handleClick} checked={checked} />
                <Box onClick={handleClick} checked={checked} />
                <Box onClick={handleClick} checked={checked} />
                <Box onClick={handleClick} checked={checked} />
            </div>
        </div>
    )
}
