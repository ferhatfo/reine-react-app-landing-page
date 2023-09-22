import React from 'react'
import './Header.scss'
import Image from 'next/image'
import Link from 'next/link';
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="brand" href="#"><Image src='/Images/svg/logo.svg' width={94} height={66} alt='Logo' /></Link>
        <input type="checkbox" id="nav" className="hidden" />
        <label htmlFor="nav" className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div className="wrapper">
          <ul className="menu">
            <li className="menu-item"><Link href="#">Home</Link></li>
            <li className="menu-item"><Link href="#">Features</Link></li>
            <li className="menu-item"><Link href="#">About</Link></li>
            <li className="menu-item"><Link href="#">Rewievs</Link></li>
            <li className="menu-item"><Link href="#">Pricing</Link></li>
            <li className="menu-item"><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
