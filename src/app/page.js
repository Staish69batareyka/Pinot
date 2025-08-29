"use client";
import styles from "./globals.css";

export default function Page() {

    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.side} ${styles.left}`}>
                    <div className={styles.content}>
                        <h1>left section</h1>
                    </div>
                </div>
                <div className={`${styles.side} ${styles.right}`}>
                    <div className={styles.content}>
                        <h1>right section</h1>
                    </div>
                </div>
                <div
                    className={`${styles.logo}`}>
                    <img src='' alt="logo" />
                </div>
            </div>
        </>
    );
}
