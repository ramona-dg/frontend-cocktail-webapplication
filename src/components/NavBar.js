import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/generated.svg';
import styles from './NavBar.module.css';
import {AuthContext} from "../context/AuthContext";


function NavBar() {
const { login, logout, isAuth, meloen } = useContext(AuthContext);
const navigate = useNavigate();
console.log(meloen);

// Deze onClick functies moet korten kunnen met if else of zoiets?
    function handleLoginClick(e) {
        e.preventDefault();
        navigate('/login');
    }

    function handleRegisterClick(e) {
        e.preventDefault();
        navigate('/register');
    }


    function handleLogoClick(e) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <nav className={styles.container}>

            <div className={`${styles.box} ${styles.one}`}/>
            <div className={`${styles.box} ${styles.two}`}>
                <img src={logo} alt="logo" onClick={handleLogoClick}/>
            </div>
            <div className={`${styles.box} ${styles.three}`}>
                <button type="button" onClick={handleLoginClick}>Inloggen</button>
                <button type="button" onClick={handleRegisterClick}>Registreren</button>
            </div>

        </nav>
    );
}

export default NavBar;