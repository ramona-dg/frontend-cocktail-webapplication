import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from "../login/Login.module.css";

// wat nog te doen?
// ik zou hier nog een inputfield component kunnen maken. Deze misschien ook gebruiken voor register.js?

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
                        {/*     De submit button moet nog werkend gemaakt worden in samenwerking met de database*/}
                        <button type="submit"
                        >Inloggen
                        </button>
                    </form>

                    <p><Link to="/">Wachtwoord vergeten?</Link></p>
                    {/*     Dit is een button die verder ontwikkelt in de toekomst.
                            Wordt nu terug gestuurd naar Home-pagina,
                            maar zou hier nog een evetuele pagina voor kunnen maken met "under constuction". */}
                    <p>Of nog geen account, maak er <Link to="/register">hier</Link> eentje aan!</p>
                    {/*     Via dit Link element wordt je doorgestuurd naar de register-pagina */}
                </div>
            </div>

        </>
    );
}

export default Login;