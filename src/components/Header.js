import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify Visual Studio</h1>
    <Link exact to='/' activeClassName='is-active'>Home</Link>
    <Link to='/create' activeClassName='is-active'>Add</Link>
    <Link to='/help' activeClassName='is-active'>Help</Link>
  </header>
)

export default Header
