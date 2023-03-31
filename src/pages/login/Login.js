import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from "../login/Login.module.css";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

// Wat nog te doen?
// Ik zou hier nog een input field component kunnen maken. Deze misschien ook gebruiken voor register.js?

function Login() {
    let { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLoginRequest(e) {
        console.log(email, password);
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": email,
                "password" : password,
            });
            console.log(response.data.accessToken);// om te checken of het werkt
            login(response.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
        }


    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}/>
                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>

                    <h1>Inloggen</h1>
                    <form onSubmit={handleLoginRequest}>
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
                                disabled={loading}
                        >
                            Inloggen
                        </button>
                    </form>

                    <p><Link to="/">Wachtwoord vergeten?</Link></p>
                    {/*     Dit is een button die verder ontwikkelt in de toekomst.
                            Wordt nu terug gestuurd naar Home-pagina,
                            maar zou hier nog een evetuele pagina voor kunnen maken met "under constuction". */}
                    <p>Of nog geen account, maak er <Link to="/register">hier</Link> eentje aan!</p>
                </div>
            </div>

        </>
    );
}

export default Login;