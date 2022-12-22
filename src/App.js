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
            <NavBar />
            <div className={styles[`outer-container`]}>
                <div className={styles[`inner-container`]}>
            <Home />
            <Register />
            <Login />
            <Profile />
            <Search />
            <Overview />
            <Recipe />
            </div>
            </div>
        </>

    );
}

export default App;
