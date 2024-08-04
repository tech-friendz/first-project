import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../css/navbar.module.css';
import logo from '../assets/logo.png';
import menu from '../assets/menu-svg.svg';

function Navbar({ isModalOpen, openModal }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMenu = () => {
        if (isModalOpen) {
            openModal();
        }
        setMenuOpen(!menuOpen);
    };

    const handleOpenModal = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
        openModal();
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.navContainer} ${isModalOpen ? styles.hidden : ''}`}>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContent}>
                    <ul className={styles.navList}>
                        <li className={location.pathname === '/' ? styles.active : ''}>
                            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li className={location.pathname === '/service' ? styles.active : ''}>
                            <NavLink to="/service" onClick={closeMenu}>Services</NavLink>
                        </li>
                        <li className={location.pathname === '/portfolio' ? styles.active : ''}>
                            <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
                        </li>
                    </ul>
                    <div className={styles.navbarCurve}>
                        <NavLink to="/" onClick={closeMenu}>
                            <img src={logo} alt="logo" className={styles.logo}/>
                        </NavLink>
                    </div>
                    <ul className={styles.navList}>
                        <li className={location.pathname === '/about' ? styles.active : ''}>
                            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
                        </li>
                        <li className={location.pathname === '/blog' ? styles.active : ''}>
                            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
                        </li>
                        <li className={location.pathname === '/contact' ? styles.active : ''}>
                            <a onClick={() => { handleOpenModal(); closeMenu(); }}>Contact Us</a>
                        </li>
                    </ul>
                    <img
                        src={menu}
                        alt="menu"
                        className={styles.burgerMenu}
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li><NavLink to="/service" onClick={closeMenu}>Service</NavLink></li>
                        <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
                        <li><a onClick={() => { handleOpenModal(); closeMenu(); }}>Contact Us</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;

