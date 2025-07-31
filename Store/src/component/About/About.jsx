import React from 'react'
import styles from './About.module.css';
import aboutImg from '../images/2147696409.jpg'

export default function About() {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <h2><i className="fa-solid fa-bag-shopping" /> About Us</h2>
                    <p>
                        Welcome to <b>STORE</b> your go-to destination for unique and high-quality products that bring joy to
                        your everyday life.
                        We believe that shopping should be simple, enjoyable, and inspiring. That’s why we’ve carefully
                        selected each item in our collection to ensure it meets our high standards of style, quality, and
                        affordability.
                        Whether you're looking for something for yourself or a thoughtful gift for someone special, you’ll
                        find it here.
                    </p>
                </div>
                <div className={styles.aboutImage}>
                    <img src={aboutImg} alt="About Us" />
                </div>
            </div>

        </>
    )
}
