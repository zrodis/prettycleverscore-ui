import React from 'react'

export interface BoxProps {
    onClick(param: any): void
    checked: boolean
    display?: React.ReactNode
    style?: any
}
export const BonusBox = (props: Omit<BoxProps, 'onClick'>) => (
    <Box
        onClick={null}
        style={{ cursor: 'default', borderRadius: '20px' }}
        display={'?'}
        {...props}
    />
)

export const Box = (props: BoxProps) => {
    return (
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
                overflow: 'hidden',
                userSelect: 'none',
                ...props.style,
            }}
        >
            <div style={{ width: '100%', height: '100%' }}>
                {props.checked ? (
                    <div
                        data-testid='selected'
                        style={{ width: '100%', height: '100%', backgroundColor: '#333' }}
                    >{`${String(props.display) || ''}`}</div>
                ) : (
                    <div data-testid='deselected' style={{ width: '100%', height: '100%' }}>{`${
                        String(props.display) || ''
                    }`}</div>
                )}
            </div>
        </div>
    )
}
