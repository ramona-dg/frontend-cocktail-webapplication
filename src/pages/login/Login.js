import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from "../login/Login.module.css";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}/>

                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <h1>Inloggen</h1>
                    <form>
                        <label htmlFor="username-field">
                            E-mail:
                            <br/>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </label>
<br/>
                        <label htmlFor="password-field">
                            Wachtwoord:
                            <br/>
                            <input
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br/>
                        <br/>
                        <button type="submit"
                        >Inloggen
                        </button>

                    </form>

                    <p><Link to="/">Wachtwoord vergeten?</Link></p>
                </div>
            </div>

        </>
    );
}

export default Login;