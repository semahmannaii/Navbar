import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes, FaBars, FaReact } from "react-icons/fa"

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const handleClick = () => setMobileMenu(!mobileMenu)

    const closeMenu = () => setMobileMenu(false)

    return (
        <nav className="navbar">
            <div className="nav-container container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <FaReact className="nav-icon" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {mobileMenu ? < FaTimes /> : <FaBars />}
                </div>
                <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar