"use client";
import {useState} from "react";
import styles from './page.module.css'
import Media from "@/app/Media";


export default function Page() {

    const [hover, setHover] = useState(null);

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.side} ${styles.left}
                ${hover === 'left' ? styles.active : 
                    hover === 'right' ? styles.inactive : ""}`}
                     onMouseLeave={() => setHover(null)}
                     onMouseEnter={() => {setHover('left')}}>

                    <div className={styles.content}>
                        <Media src="/post_002.gif" alt="left-content" className={styles.media} />
                        <h1>Туристический комплекс</h1>
                    </div>

                </div>
                <div className={`${styles.side} ${styles.right}
                ${hover === 'right' ? styles.active :
                hover === 'left' ? styles.inactive : ''}`}
                onMouseEnter={() => setHover('right')}
                onMouseLeave={() => setHover(null)}>
                    <div className={styles.content}>
                        <Media src="/post_001.jpg" alt="right-content" className={styles.media} />
                        <h1>Гравитационная винодельня</h1>
                    </div>
                </div>
                <div
                    className={`${styles.logo} 
                    ${hover === 'left' ? styles.logoRight : 
                    hover === 'right' ? styles.logoLeft : ''}`}>
                    <img src='favicon.ico' alt="logo" />
                </div>
            </div>
        </>
    );
}
