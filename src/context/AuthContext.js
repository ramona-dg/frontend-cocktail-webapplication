import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

// 1 maak de context zelf
//2 export de variable
export const AuthContext = createContext({});


//3 provider maken voor de context, deze plaats je in index maar om data mee te kunnen geven maak je een componentje hier.
//4 maak een custom provider component waar App.js als children wordt ontvangen vanuit index.js
//5 maak een data object en geen deze mee aan de value van de Provider

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(true);

    const navigate = useNavigate();


    const contextData = {
        meloen: "geel",
        isAuth: isAuth,
        login: login,
        logout: logout,
    };


    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        navigate('/overview');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth(false);
        navigate('/');
    }


    return (
        <AuthContext.Provider value={contextData}>

            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;





