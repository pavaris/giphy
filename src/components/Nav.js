import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = (props) =>{
  return(
    <nav>
      <div className="content-margins">
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
      </div>
    </nav>
  )
}

export default Nav;
