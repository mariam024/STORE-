import React from 'react'
import styles from '../Footer/Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles['footer-content']}>
                    <h3>STORE</h3>
                    <p>Your go-to destination for unique and high-quality products.</p>
                    <ul className={styles['footer-links']}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className={styles['footer-social']}>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div className={styles['footer-bottom']}>
                    <p>© 2025 STORE. All rights reserved.</p>
                </div>
            </footer>

        </>
    )
}
