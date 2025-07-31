import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
// import styles from '../Home/Home.module.css';
import styles from '../Home/Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    function openProducts() {
        navigate('/product');
    }

    return (
        <>
            <div className={styles.hero}>
                <div className={styles['hero-content']}>
                    <h1>Welcome to a world full of choices.</h1>
                    <p>Find your style, your vibe, your thing — all in one place.</p>
                </div>
                <button className={styles['custom-btn']} onClick={openProducts}>
                    <i className="fa-solid fa-magnifying-glass" /> Explore Now
                </button>
            </div>

            <About />
        </>
    )
}
