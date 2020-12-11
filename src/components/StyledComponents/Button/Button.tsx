import cx from 'classnames'
import React from 'react'

const Button = (props:any) => {

    const { children, isHighlighted, onClick } = props

    return (
        <button 
            className={cx({
                "app-button": true,
                "highlighted": isHighlighted
            })}
            onClick={onClick} >
            {children}
        </button>
    )
}

export default Button