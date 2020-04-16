import React from 'react'
import logo from '../../img/logo.svg'

function Header() {
    return (
        <header className="header">
            <a href="/" className="">
            <img src={logo} className="" alt="Logo - Webmotors" title="Webmotors" />
            </a>
        </header>
    )
}
  
export default Header
