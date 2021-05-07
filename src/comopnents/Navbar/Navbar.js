import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'


import './Navbar.css'

const Navbar = () => {
    const handleMenu = ()=>  setShowMenu(!showMenu)
      
    
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="navbar">
     
       
            <div className="logo">
            <NavLink to="/" className="nav-link">Logo</NavLink>
            </div>
            <nav className="nav-items" >


                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink  to="/about" className="nav-link">About</NavLink>
                <NavLink  to="/services" className="nav-link">Contact</NavLink>
                <NavLink  to="/contact-us" className="nav-link">Contact</NavLink>
                 

            </nav>
            <div className="mobile-menu " id={showMenu?"show":"hidden"}
            
            >  <NavLink to="/" className="nav-link" onClick={handleMenu}>Home</NavLink>
            <NavLink  to="/about" className="nav-link" onClick={handleMenu}>About</NavLink>
            <NavLink  to="/services" className="nav-link" onClick={handleMenu}>Contact</NavLink>
            <NavLink  to="/contact-us" className="nav-link" onClick={handleMenu}>Contact</NavLink></div>
            

            <button className="menu-toggle" onClick = {handleMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </button>




            
            
        </div>
    )
}

export default Navbar
