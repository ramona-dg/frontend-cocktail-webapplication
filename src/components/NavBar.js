import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/generated.svg';
import styles from './NavBar.module.css';
import {AuthContext} from "../context/AuthContext";

// als ingelogd dan moeten er nog twee buttons of links komen die verwijzen naar overview en search. Dan de handleClickEtc moeten wel korter maak daar een functie voor
function NavBar() {
const { login, logout, isAuth, meloen } = useContext(AuthContext);
const navigate = useNavigate();
console.log(meloen);

// Deze onClick functies moet korten kunnen met if else of zoiets?

    function handleLogoClick(e) {
        e.preventDefault();
        navigate('/');
    }

    function handleLoginClick(e) {
        e.preventDefault();
        navigate('/login');
    }
    function handleLogoutClick(e) {
        e.preventDefault();
        logout();
        navigate('/');
    }

    function handleRegisterClick(e) {
        e.preventDefault();
        navigate('/register');
    }

    function handleProfileClick(e) {
        e.preventDefault();
        navigate('/profile');
    }


    return (
        <nav className={styles.container}>

            <div className={`${styles.box} ${styles.one}`}/>
            <div className={`${styles.box} ${styles.two}`}>
                <img src={logo} alt="logo" onClick={handleLogoClick}/>
            </div>
            <div className={`${styles.box} ${styles.three}`}>

                {!isAuth ? <button type="button" onClick={handleLoginClick}>Inloggen</button> : <button type="button" onClick={handleLogoutClick}>Uitloggen</button> }

                {!isAuth ? <button type="button" onClick={handleRegisterClick}>Registreren</button> : <button type="button" onClick={handleProfileClick}>Profiel</button> }


            </div>

        </nav>
    );
}

export default NavBar;