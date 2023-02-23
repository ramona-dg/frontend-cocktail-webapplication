import React, {useEffect, useState} from 'react';
import axios from "axios";
import styles from "./SearchBar.module.css";



function SearchBar() {
    const [firstLetter, setFirstLetter] = useState("");
    const [textInput, setTextInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [cocktails, setCocktails] = useState([]);

    // useEffect haalt de array op van de eerst getypte letter die wordt geplaatst in de useState van cocktails
    useEffect(() => {
        async function fetchList() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
                console.log(response.data.drinks);
                setCocktails(response.data.drinks);
                setSuggestions(response.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }

        if (firstLetter) {

            fetchList();
        }
    }, [firstLetter]);

    const onSuggestionHandler = (textInput) => {
        setTextInput(textInput);
        setSuggestions([]);
    }

    const onChangeHandler = (textInput) => {
        setFirstLetter(textInput.charAt(0).toLowerCase());
        let matches = [];

        if (textInput.length > 0) {
            matches = cocktails.filter((cocktail) => {
                const regex = new RegExp(`${textInput}`, "gi");
                return cocktail.strDrink.match(regex);
            })
        }
        console.log(matches);
        setSuggestions(matches);
        setTextInput(textInput);
        console.log(textInput);
    }

    const handleSearch = () => {
        console.log("aap");
// Hier moet een doorverwijzing plaats vinden naar de waardes waar een search op gedaan wordt. Een overview van gevonden resultaten naar aanleiding van de search
    }

    return (
        <>
            <h1>Search</h1>
            <form>
                <label htmlFor="name-field">
                    <br/>
                    <input
                        placeholder={!textInput ? "Type here your cocktail" : {textInput}}
                        type="text"
                        value={textInput}
                        onChange={(event) => {
                            onChangeHandler(event.target.value);
                        }}
                    />

                    {suggestions && suggestions.slice(0, 5).map((suggestions, i) =>
                    <div key={i} className={styles.suggestions} onClick={() =>onSuggestionHandler(suggestions.strDrink)}>
                        {suggestions.strDrink}
                    </div>
                    )}

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