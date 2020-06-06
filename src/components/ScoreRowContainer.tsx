import React from 'react'

export const ScoreRowContainer = ({ testId, color, children }) => {
    return (
        <div
            data-testid={testId}
            style={{
                backgroundColor: color,
                display: 'inline-block',
                padding: '4px',
                margin: '3px auto',
                borderRadius: '4px',
            }}
        >
            {children}
        </div>
    )
}
