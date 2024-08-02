import React from 'react';
import './HeaderButtonStyles.css'
import { Children } from 'react';

const HeaderButton = ({children, callback, className}) => {
  return (
    <button className={className} onClick={callback}>{children}</button>
  )
}

export default HeaderButton
