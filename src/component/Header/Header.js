import React from "react"
import "./header.css"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate=useNavigate()
  const handleGotoLogin= () => {
    navigate('/')
}
  return (
    <div className="nav1">
      <h1 className="header-1">Kitchen Order Ticket</h1>
      <div className="navLinks">
      <div onClick={handleGotoLogin}>
        Logout
      </div>
    </div>
    
    </div>
  
  )
}

export default Header