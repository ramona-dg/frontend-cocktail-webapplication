import React, {createContext, useEffect, useState} from "react";
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
        status: 'pending',
    });

    useEffect(() => {
        console.log("IK BEN REFRESHED")
        // is er een token?  zo ja is deze nog geldig?
        const token = localStorage.getItem('userToken');

        if (token) { // zoja? haal gegevens op en zet deze in state
            async function getUserData() {
                const decodedToken = jwtDecode(token);
                try {
                    const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
                    console.log(response.data);
                    toggleAuth({
                        isAuth: true,
                        user: {
                            username: response.username,
                            email: response.email,
                            id: response.id,
                        },
                        status: 'done',
                    });
                } catch (e) {
                    toggleAuth({
                        ...auth,
                        status: 'error',
                    });
                    // voor de zekeheid de token verwijderen uit localStorage zodat gebruiker opnieuw inligd en nieuwe token krijgt (localStorage Clear
                    console.error(e);

                }
            }

            getUserData(); // bij refreh gaat hij terug naar home-pagina
        } else {
            // zo nee, doe niks.
            toggleAuth({
               ...auth,
                status: 'done',
            });
        }


    }, []);


    function login(token) { // Deze token wordt verkregen vanuit de Login.js
        console.log('Gebruiker is ingelogd!'); // voor de dev console
        localStorage.setItem('userToken', token);        // 1. zet de token in de localstorage
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        getData(token, '/profile');   //vul je de gegevens voor de getData functie beneden in de pagina
    }

    //
    // getData()  //2. maak een async functie die de data ophaalt. detData()
    // // getData(decodedToken.sub, token), dit gaat niet goed, bad request!
    // navigate('/profile');

    // zet de gebruikersgegevens (maar niet de JWT!) in de context state
// async functie op data op te halen voor login en useEffect om gegevens van de jwt token uit localStorage te halen
    // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function getData(token, redirectUrl) {
        try {
            // haal gebruikersdata op met de token en id van de gebruiker
            const response = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            })
            console.log(response.data); // check of response binnenkomt
            // zet de gegevens in de state
            toggleAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.username,
                    email: response.email,
                    id: response.id,
                },
                status: 'done',
            });
            console.log(auth);

            if (redirectUrl) {  // dit is omdat als de navigate in de login() staat dan zou hij als doorlinken voordat response is opgehaald.
                navigate(redirectUrl);
            }

        } catch (e) {   // error afvangen
            console.error(e);
            toggleAuth({
                ...auth,
                status: 'done',
            });
        }
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    // A5. maak een data object en geef deze mee aan de value van de Provider
    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };

    return (
// A4 maak een custom provider component waar App.js als children wordt ontvangen vanuit index.js
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' && children}
            {auth.status === 'pending' && <p>Loading...</p>}
            {auth.status === 'error' && <p>Error! Refresh de pagina!</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;





