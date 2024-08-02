import React from 'react'
import cn from 'classnames'
import "./ButtonStyles.css"

const Button = ({children, onClick, type}) => {
  return (
    <button onClick={onClick} className={cn({
        "start": type==="start",
        "pause-continue": type==="pause-continue",
        "cancel": type==="cancel"
    })}>{children}</button>
  )
}

export default Button
