import React, {useState} from 'react';
import styles from "../register/Register.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

//Wat moet nog gebeuren
// De create account-button moet de Sates opslaan in de backend
// Als registreren gelukt is. Dan doorverwijzen naar Login.js
// ik zou hier nog een inputfield component kunnen maken. Deze misschien ook gebruiken voor login.js? komen deze overeen en kunnen deze overeen gemaakt worden?
// De inputs moeten nog wel voldoen aan bepaalde voorwaarden! deze kunnnen met if else in component inputfield worden gecheckt?

function Register() {
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');


    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
   const navigate = useNavigate();

    async function handleRegisterRequest(e) {
        console.log(email, password);
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
          const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                "username": email,
                "email" : email,
                "password" : password,
                "info": firstname, surname ,dateOfBirth,
                "role": ["user", "admin"]
            });
            console.log(response);
            navigate('/login');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className={styles.contentContainer}>

                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <h1>Registreren</h1>
                    <form onSubmit={handleRegisterRequest}>
                        <label htmlFor="firstname-field">
                            Firstname:
                            <br/>
                            <input
                                name="firstname"
                                type="text"
                                id="firstname-field"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label htmlFor="surname-field">
                            Lastname:
                            <br/>
                            <input
                                name="surname"
                                type="text"
                                id="surname-field"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </label>
                        <br/>

                        <label htmlFor="dateOfBirth-field">
                            Date of Birth:
                            <br/>
                            <input
                                name="dateOfBirth"
                                type="date"
                                id="dateOfBirth-field"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </label>
                        <br/>

                        {/*!!! Hier moet nog een inputveld komen voor een profiel foto of mogelijk avatar kiezen?? Afhankelijk van wat makkelijker is*/}
                        <label htmlFor="avatar-field">Upload profile picture:
                            <br/>
                            <input type="file"
                                   id="avatar-field"
                                   name="avatar"
                                   accept="image/*,.pdf"/>
                        </label>
                        <br/>
                        <br/>
                        <label htmlFor="username-field">
                            E-mail:
                            <br/>
                            <input
                                name="email"
                                type="email"
                                id="username-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </label>
                        <br/>
                        <label htmlFor="password-field">
                            Password:
                            <br/>
                            <input
                                name="password"
                                type="password"
                                id="password-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <br/>
                        <label htmlFor="passwordCheck-field">
                            Password check:
                            <br/>
                            <input
                                name="passwordCheck"
                                type="password"
                                id="passwordCheck-field"
                                value={passwordCheck}
                                onChange={(e) => setPasswordCheck(e.target.value)}
                            />
                        </label>
                        <br/>


                        <br/>
                        <br/>
                        {error && <p className="error">Dit account bestaat al. Probeer een ander e-mailadres.</p>}
                        <button type="submit"
                                disabled={loading}
                        >
                            Create account
                        </button>

                    </form>

                </div>
            </div>

        </>
    );
}

export default Register;