import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// 1 maak de context zelf
//2 export de variable
//3 provider maken voor de context, deze plaats je in index maar om data mee te kunnen geven maak je een componentje hier.
//4 maak een custom provider component waar App.js als children wordt ontvangen vanuit index.js
//5 maak een data object en geen deze mee aan de value van de Provider
export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });
    const navigate = useNavigate();


    const contextData = {
        meloen: "geel",
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };


    function login(token) {
        console.log(token);// checken of token binnenkomt van login.js
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);

        // 1. zet de token in de lozalstoage
        localStorage.setItem('userToken', token);
        //2. haal de gebruikersgegevens op
        //async function getData() ophalen
        // zet de gebruikersgegevens ( maar niet de JWT!) in de context state
        console.log('Gebruiker is ingelogd!');
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


    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;





