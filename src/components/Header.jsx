import React from 'react'
import HeaderButton from '../ui/HeaderButton'
import "./HeaderStyles.css"
import { useNavigate } from 'react-router-dom'

const Header = ({ buttonTitle, showAddButton, onClick }) => {
  showAddButton = showAddButton || false
  const navigate = useNavigate()
  return (
    <header>
      <HeaderButton callback={onClick}>{buttonTitle}</HeaderButton>
      {showAddButton && <HeaderButton className="add-button" callback={()=>navigate("/timer-setup")} >+</HeaderButton>}
    </header>
  )
}

export default Header
