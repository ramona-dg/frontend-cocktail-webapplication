import React from 'react';
import logo from '../assets/generated.svg';
import styles from './NavBar.module.css';


function NavBar() {


    return (

        <nav className={styles.container}>

            <div className={`${styles.box} ${styles.one}`}/>
            <div className={`${styles.box} ${styles.two}`}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={`${styles.box} ${styles.three}`}>
                <button>Inloggen</button>
                {/*Switchen naar uitloggen if Auth*/}
                <button>Registreren</button>
                {/*Switchen naar Profiel if Auth*/}
            </div>

        </nav>
    );
}

export default NavBar;