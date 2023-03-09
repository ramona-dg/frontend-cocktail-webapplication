import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./SearchBar.module.css";


//Wat moet hier nog gebeuren?
//de waarde die wordt aangeklikt moet opgeslagen worden
//de opgeslagen waarde moet doorgegeven worden aan recipe pagine als er op de search-button wordt geklikt.

function SearchBar() {
    const [firstLetter, setFirstLetter] = useState(""); // voor de eerste letter om data op te halen voor de cocktails array
    const [textInput, setTextInput] = useState(""); // input van de gebruiker en de onClick
    const [suggestions, setSuggestions] = useState([]); // suggesties die worden verkregen vanuit de onChangeHandler waar de inputwaarde vergeleken wordt met de data van de opgehaalde array
    const [cocktails, setCocktails] = useState([]); // is de array die verkregen wordt door middel van de eerst ingetypte letter

    const navigate = useNavigate();

    // useEffect haalt een array van data op van de eerst getypte letter van de textInput. De data wordt geplaatst in de useState van cocktails.
    useEffect(() => {
        async function fetchList() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
                console.log(response.data.drinks);
                setCocktails(response.data.drinks); // deze kan volgens mij weg?
                setSuggestions(response.data.drinks);// Dit is de array waar mogelijke suggesties in zitten in vergelijking met de eerst getypte letter
            } catch (error) {
                console.error(error);
            }
        }

        if (firstLetter) {

            fetchList();
        }
    }, [firstLetter]); // dependency firstletter, waarbij verandering van firstletter de useEffect opnieuw rendert.

    const onSuggestionHandler = (textInput) => {
        setTextInput(textInput);
        console.log(textInput); // deze console.log om te kijken of de aangeklikte waarde echt wordt opgeslagen
        setSuggestions([]);
    }

    const onChangeHandler = (textInput) => {
        setFirstLetter(textInput.charAt(0).toLowerCase()); // setten van de eerste letter op de useEffect mee te activeren
        let matches = []; // lege array om mogelijke matches mee in op te vangen
        if (textInput.length > 0) { // Het maken van de matches in overeenkomend met de ingetypte waardes bij inputText
            matches = cocktails.filter((cocktail) => {
                const regex = new RegExp(`${textInput}`, "gi"); // hoe dit werkte nog even een keer goed opzoeken.
                return cocktail.strDrink.match(regex);
            })
        }
        console.log(matches); // loggen van de matches in de console
        setSuggestions(matches); //setten de overeengekomen matches in vergelijking van de inputText
        setTextInput(textInput); //setten van de inputText in uitvoering bij onChange
        console.log(textInput); // loggen van de inputText in de console
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        if (textInput) {

            navigate('/recipe', { state: { name: textInput }}
        }
        console.log(textInput + " deze moet naar recipe.js");// loggen om te kijken of hij werkt
    };

    return (
        <>
            <h1>Search</h1>
            <form>
                <label htmlFor="name-field">
                    <br/>
                    <input
                        placeholder={!textInput ? "Type here your cocktail" : {textInput}} // Wat er in de search balk komt te staan
                        type="text"
                        value={textInput} // de waarde wat in de searchbalk staat
                        onChange={(event) => { // de waarde wat er veranderd in de balk wordt als waarde doorgegeven bij elke verandering (onChange) (verandering.losgelaten.opdeWaarde)
                            onChangeHandler(event.target.value);
                        }}

                    />

                    {suggestions && suggestions.slice(0, 5).map((suggestion, i) => //als er suggesties zijn voer een mapping uit voor de eerste 5 waardes en laat deze waardes als de volgende <div> zien. Uit array suggestions wordt 1 suggestion gehaalf en i indexnummer als ker meegegeven voor de <div>
                        <div key={i} className={styles.suggestions}
                             onClick={() => onSuggestionHandler(suggestion.strDrink)}>
                            {/*bij het aanklikken van de suggestiewaarde voer functie onSuggestionHandler uit met de meegegeven waarde die wordt aangeklikt (suggestion.strDrink*/}
                            {suggestion.strDrink} {/*de waarde*/}
                        </div>
                    )}

                </label>


                <button className={styles.searchButton} type="button" onClick={handleOnClick}>
                    Search
                </button>
                <br/>
            </form>
        </>
    );
};

export default SearchBar;
