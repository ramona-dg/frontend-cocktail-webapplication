import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";



// Recipe moet gemaakt worden vanuit search.js ( dropdown + searchbar) en vanuit overview.js (hier moet een onClick komen op de naam van de cokctail)


// useParams om dynamische url te kunnen gebruiken voor specifiek product, Is dit nodig?
function Recipe() {
 const location = useLocation();
 const { textInput } = location.state || {}; // Dit lege object zorgt ervoor dat er geen crash ontstaat als de location.state leeg is of undefined. Zou kunnen afhandelen om de button disabled te maken in searchBar.js maar dan moet er ook voor gezorgd worden dat de state niet null of undefined is ipv alleen leeg.

console.log(textInput);
const [dataCocktail, setDataCocktail] = useState({})

    useEffect(() => {
        async function fetchCocktail() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${textInput}`);
                console.log(response.data.drinks[0]);
                setDataCocktail(response.data.drinks[0]);

            } catch (error) {
                console.error(error);
            }
        }

        if (textInput) {

            fetchCocktail();
        }
    }, [textInput]);

console.log(dataCocktail);


// moeten nog textInput waarde uit search zien te krijgen
    return (


        <>
            <h3>{dataCocktail.strDrink}</h3>
            <img  src={dataCocktail.strDrinkThumb} alt="Cocktail Image" />

        </>
    );
}

export default Recipe;