import cx from 'classnames'
import React from 'react'

const Button = (props:any) => {
    const { children, status, isHighlighted, onClick } = props

    return (
        <button 
            className={cx({
                "app-button": true,
                "highlighted": isHighlighted,
                "correct": status === 'correct',
                "incorrect": status === 'incorrect'
            })}
            onClick={onClick} >
            {children}
        </button>
    )
}

export default Button