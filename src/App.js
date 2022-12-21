import './App.module.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Overview from "./pages/overview/Overview";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

function App() {
    return (
        <>
            <Home />
            <Register />
            <Login />
            <Profile />
            <Search />
            <Overview />
            <Recipe />

        </>

    );
}

export default App;
