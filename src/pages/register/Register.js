import React, {useState} from 'react';
import styles from "../register/Register.module.css";
import axios from "axios";

//Wat moet nog gebeuren
// De create account-button moet de Sates opslaan in de backend
// Als registreren gelukt is. Dan doorverwijzen naar Login.js
// ik zou hier nog een inputfield component kunnen maken. Deze misschien ook gebruiken voor login.js? komen deze overeen en kunnen deze overeen gemaakt worden?
// De inputs moeten nog wel voldoen aan bepaalde voorwaarden! deze kunnnen met if else in component inputfield worden gecheckt?

function Register() {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    async function registerRequest() {
        try {
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/all');
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className={styles.contentContainer}>

                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <h1>Registreren</h1>
                    <form onSubmit={registerRequest}>
                        <label htmlFor="firstName-field">
                            Firstname:
                            <br/>
                            <input
                                name="firstName"
                                type="text"
                                id="firstName-field"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}/>
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
                        <button type="button" onClick={registerRequest}
                        >Create account
                        </button>

                    </form>

                </div>
            </div>

        </>
    );
}

export default Register;