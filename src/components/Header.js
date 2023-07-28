import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div>
     
<NavLink
  to="/"
  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
  Home
</NavLink>
<NavLink
  to="/cart"
  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}>
  Cart
</NavLink>

    </div>
  )
}