import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

// A1+2 maak de context zelf en export deze variable
export const AuthContext = createContext({});

// A3. provider maken voor de context, deze plaats je in index maar om data mee te kunnen geven maak je een componentje hier.
function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });

// A5. maak een data object en geen deze mee aan de value van de Provider
    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };


    function login(token) { // Deze token wordt verkregen vanuit de Login.js
        console.log(token);// checken of token binnenkomt van login.js
        console.log('Gebruiker is ingelogd!'); // voor de dev console
        const decodedToken = jwtDecode(token); // console.log(decodedToken);


        localStorage.setItem('userToken', token);        // 1. zet de token in de localstorage
        //2. maak een async functie die de data ophaalt. detData()
        // getData(decodedToken.sub, token), dit gaat niet goed, bad request!


        // zet de gebruikersgegevens (maar niet de JWT!) in de context state

        toggleAuth({
            isAuth: true,
            user: {
                email: decodedToken.sub,
                id: decodedToken.sub,
            },
        });
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleAuth({
            isAuth: false,
            user: null
        });
        navigate('/');
    }

    // async function getData(id, token) {
    //     try {
    //         const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `${token}`,
    //             }
    //         });
    //         console.log(response);
    //
    //     } catch (e) {
    //         console.error(e);
    //
    //     }
    // }

    return (
// A4 maak een custom provider component waar App.js als children wordt ontvangen vanuit index.js
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;





