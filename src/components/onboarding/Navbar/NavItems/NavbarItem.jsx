import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UXUIContext } from '../../../../context/UxUIProvider'

const NavbarItem = ({name,route}) => {

  const {browserWidth} = useContext(UXUIContext)


  return (
    <li className={`nav-item hoverPrimary ${browserWidth < 1300 ? 'mr-3' : 'mx-5'}`}>
        <NavLink className='nav-link' activeClassName='isActive'  to={route}>
            {name}
        </NavLink>
    </li>
  )
}

export default NavbarItem