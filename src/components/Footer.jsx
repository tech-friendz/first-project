import React from 'react';
import styles from '../css/footer.module.css';
import logo from '../assets/logo.png';
// import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedIn.jpg';
// import instagram from '../assets/Instagram.png';
// import discord from '../assets/Discord.png';
import { Link } from 'react-router-dom';

function Footer({ openModal }) {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.backBlock}></div>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <h2>Request More Information</h2>
                    <p>Welcome to SIRUNYAN CAD Studio, where artistry meets technology to create breathtaking jewelry designs.</p>
                    <button className={styles.contactButton} onClick={openModal}>Contact Us</button>
                </div>
                <div className={styles.footerBottom}>
                    <p>© 2024 FriendTech, LLC</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerContainer}>
                    <img src={logo} alt="" className={styles.logo} />
                    <nav className={styles.footerNav}>
                        <Link to={'services'}>Services</Link>
                        <Link to={'portfolio'}>Portfolio</Link>
                        <Link to={'/aboutus'}>About Us</Link>
                        <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Contact Us</a>
                        <Link to={'/blog'}>Blog</Link>
                    </nav>
                    <div className={styles.footerSocial}>
                        <a target="_blank" href={'https://www.linkedin.com/in/tatev-sirunyan/'}>
                            <img src={linkedIn} alt="LinkedIn" />
                        </a>
                        {/*<a href={''}><img src={instagram} alt="Instagram" /></a>*/}
                        {/*<a href={''}><img src={discord} alt="Discord" /></a>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
