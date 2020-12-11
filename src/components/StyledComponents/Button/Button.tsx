import React from 'react'
import cx from 'classnames'

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