import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) =>{
  return(
    <nav>

        <ul>
          <li>
            <NavLink
              to='/'
              exact
              >Search</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
        </li>
        </ul>

    </nav>
  )
}

export default Nav;
