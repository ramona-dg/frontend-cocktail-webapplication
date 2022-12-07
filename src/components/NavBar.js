import React from 'react';
import logo from '../assets/generated.svg';



function NavBar() {


    return (
        <nav>
            {/*link hieronder naar homepage*/}
            <span className="logo-container">
            <img src={logo} alt="logo"/>
          </span>
        </nav>
    );
}

export default NavBar;