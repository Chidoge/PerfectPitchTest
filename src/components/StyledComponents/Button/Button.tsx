import cx from 'classnames'
import React from 'react'

const Button = (props:any) => {
    const { children, status, disabled, isHighlighted, onClick } = props

    return (
        <button 
            className={cx({
                "app-button": true,
                "highlighted": isHighlighted,
                "correct": status === 'correct',
                "incorrect": status === 'incorrect'
            })}
            disabled={disabled}
            onClick={onClick} >
            {children}
        </button>
    )
}

export default Button