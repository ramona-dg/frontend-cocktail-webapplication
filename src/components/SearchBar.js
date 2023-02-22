import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "../components/SearchBar.modules.css";


function SearchBar  ( )  {
    const [firstLetter, setFirstLetter] = useState("");
    const [cocktailsSuggestions, setCocktailsSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // useEffect haalt de array op van de eerst getypte letter die wordt geplaatst in de useState van cocktails
    useEffect(() => {
        async function fetchList() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
                console.log(response.data.drinks);
                setCocktailsSuggestions(response.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }

        if (firstLetter) {

            fetchList();
        }
    }, [firstLetter]);

    const matchingCocktails = cocktailsSuggestions.filter(cocktail => cocktail.strDrink.toLowerCase().startsWith(inputValue.toLowerCase()));
    const placeholder = matchingCocktails.length > 0 ? `${inputValue}${matchingCocktails[0].strDrink.substring(inputValue.length)}` : inputValue;


    const handleSearch = () => {
        console.log("aap");
// Hier moet een doorverwijzing plaats vinden naar de waardes waar een search op gedaan wordt. Een overview van gevonden resultaten naar aanleiding van de search
    };

    return (
<>
    <h1>Search</h1>
    <form>
        <label htmlFor="name-field">
            <br/>
            <input
                placeholder={!firstLetter ? "Type here your cocktail" : placeholder}
                id="cocktail"
                type="text"
                value={inputValue}
                onChange={(event) => {
                    const value = event.target.value;
                    setInputValue(value);
                    setFirstLetter(value.charAt(0).toLowerCase());
                }}
            />
        </label>
        <button className={styles.searchButton} onClick={handleSearch}>
            Search
        </button>
        <br/>
    </form>
</>
    );
};

export default SearchBar;