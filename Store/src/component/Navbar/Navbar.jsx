import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top bg-body-tertiary ${styles.navbar}`}>
            <div className="container-fluid">
                <NavLink className={`navbar-brand ms-4 ${styles.navbarBrand}`} to={'/'}><i className="fa-solid fa-store" /> STORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                    <ul className={`nav nav-underline ${styles.nav}`}>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to={'/'}><i className="fa-solid fa-house" /> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to={'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to={'/product'}>Products</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
