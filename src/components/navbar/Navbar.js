import React from 'react';
import './Navbar.scss'
import reikoLogo from './reiko-logo.png'

export const Navbar = () => {
  return (
    <div className='navbar' >
      <img className='navbar__logo' src={reikoLogo} alt="" />
      <nav className='navbar__nav'>
          <ul className='navbar__nav-ul'>
              <li className='navbar__nav-li' >HOME</li>
              <li className='navbar__nav-li'>THE STUDIO</li>
              <li className='navbar__nav-li'>UPDATES</li>
              <li className='navbar__nav-li'>ROADMAP</li>
          </ul>
      </nav>
    </div>
  )
}
