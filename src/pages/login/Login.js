import React from 'react';
import styles from "../login/Login.module.css";

function Login() {
    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}>
                    <p>Hier komt een afbeelding</p>
                </div>
                    <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <p>hier komt login form
                    </p>
                </div>
            </div>

        </>
    );
}

export default Login;