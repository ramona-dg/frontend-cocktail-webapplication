import React from "react";
import {Routes, Route} from "react-router-dom";
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


function App() {
    return (
        <>
            <NavBar/>
            <div className={styles[`outer-container`]}>
                <div className={styles[`inner-container`]}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/overview" element={<Overview/>}/>
                        <Route path="/recipe" element={<Recipe/>}/>
                        {/*<Route path="*" element={<NotFound/>}/> Pagina maken het element er in not found dit vangt error af van typefout*/}
                    </Routes>
                </div>
            </div>
            {/*    footer  */}
        </>

    );
}

export default App;
