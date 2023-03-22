import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/generated.svg';
import styles from './NavBar.module.css';
import {AuthContext} from "../context/AuthContext";

// De overview en search button moeten aan de anderekant van de pagina komen met CSS
function NavBar() {
const { login, logout, isAuth, meloen } = useContext(AuthContext);
const navigate = useNavigate();
console.log(meloen);

// Deze onClick functies moet korten kunnen met if else of zoiets of case??

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
    }

    function handleRegisterClick(e) {
        e.preventDefault();
        navigate('/register');
    }

    function handleProfileClick(e) {
        e.preventDefault();
        navigate('/profile');
    }

    function handleOverviewClick(e) {
        e.preventDefault();
        navigate('/overview');
    }

    function handleSearchClick(e) {
        e.preventDefault();
        navigate('/search');
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

                {isAuth && <button type="button" onClick={handleOverviewClick}>Overview</button>}
                {isAuth && <button type="button" onClick={handleSearchClick}>Search</button>}

            </div>

        </nav>
    );
}

export default NavBar;