import React from 'react'

export function SharedButton({onClick, children}){
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    )
}