import React, {useState} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import './App.module.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Overview from "./pages/overview/Overview";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import NavBar from "./components/NavBar";
import styles from "./App.module.css"

// Voor alle buttons ook een component maken?


function App() {
    const [isAuth, setIsAuth] = useState(true);


    return (
        <>
            <NavBar/>
            <div className={styles[`outer-container`]}>
                <div className={styles[`inner-container`]}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/" replace/>}/>
                        {/*Replace zorgt ervoor dat de pagina wordt vervangen en dat als je op de "back"-knop druk je niet terug gaat naar geauthoriseerde pagina als je niet geautoriseerd bent
                        Kan weggelaten worden*/}
                        <Route path="/search" element={isAuth ? <Search/> : <Navigate to="/" replace/>}/>
                        <Route path="/overview" element={isAuth ? <Overview/> : <Navigate to="/" replace/>}/>
                        <Route path="/recipe" element={isAuth ? <Recipe/> : <Navigate to="/" replace/>}/>

                        {/*<Route path="*" element={<NotFound/>}/> Pagina maken het element er in not found dit vangt error af van typefout*/}
                    </Routes>
                </div>
            </div>
            {/*    footer  */}
        </>

    );
}

export default App;
