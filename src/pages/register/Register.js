import React, {useState} from 'react';
import styles from "../register/Register.module.css";
import {Link} from "react-router-dom";


function Register() {

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    return (
        <>
            <div className={styles.contentContainer}>

                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <h1>Registreren</h1>
                    <form>
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
                        <button type="submit"
                        >Create account
                        </button>

                    </form>

                </div>
            </div>

        </>
    );
}

export default Register;