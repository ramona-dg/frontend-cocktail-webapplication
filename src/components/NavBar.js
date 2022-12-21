import React from 'react';
import logo from '../assets/generated.svg';
import styles from './NavBar.module.css';


function NavBar() {


    return (
        <nav className={styles["container"]}>
            {/*hier komt nog een box komt die verdwijnt als het beeld te klein wordt en de boxen uit de container onder elkaar komen */}
            <img src={logo} alt="logo"/>
        {/*    hier komt nog een box voor de dotjes*/}
        </nav>
    );
}

export default NavBar;