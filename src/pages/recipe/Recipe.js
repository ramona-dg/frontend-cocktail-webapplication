import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";

// !! hier moet nog komen als de states leef zijn dat de cocktail niet bestaat! of dit moet eerst gecheckt worden in de searchbar.js
// Recipe moet gemaakt worden vanuit search.js ( dropdown + searchbar) en vanuit overview.js (hier moet een onClick komen op de naam van de cokctail)

//Vanuit searchbalk gemaakt maar nu nog vanuit dropdown en overview!
//Moet hier nog iets met useParams() gebeuren voor dynamische url?


function Recipe() {
    const location = useLocation();
    const  { name } = location.state || {};
    const  { textInput } = location.state || {};
    // weet even niet of deze nodig is
    // const {textInput} = location.state || {}; // Dit lege object zorgt ervoor dat er geen crash ontstaat als de location.state leeg is of undefined. Zou kunnen afhandelen om de button disabled te maken in searchBar.js maar dan moet er ook voor gezorgd worden dat de state niet null of undefined of een naam die niet bestaatis ipv alleen leeg.

    console.log(name || textInput);
    const [dataCocktail, setDataCocktail] = useState({});
    const [ingredients, setIngredients] = useState([]); // state waar een lijst met ingredienten en hoeveelheid komt vanuit de dataCocktail state

    useEffect(() => {
        async function fetchCocktail() { // ophalen data die gebruikt wordt voor de recept pagina voor de specifieke cocktail aangevraagd bij searchBar.js Dropdown.js of overview.js
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name || textInput}`);
                console.log(response.data.drinks[0]);
                setDataCocktail(response.data.drinks[0]);


            } catch (error) {
                console.error(error);
            }
        }

        if (name || textInput) {

            fetchCocktail();
        }
    }, [name, textInput]);



    const ingredientList = ingredients.join(", ");

    useEffect(() => {
        const updatedIngredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
            if (dataCocktail[ingredientKey]) {
                updatedIngredients.push(`${dataCocktail[measureKey]} ${dataCocktail[ingredientKey]}`);
            }
        }
        setIngredients(updatedIngredients);
    }, [dataCocktail]);


// moeten nog textInput waarde uit search zien te krijgen
    return (


        <>
            {/*<img  src={dataCocktail.strDrinkThumb} alt="Cocktail Image" /> // Afbeelding te groot aanpassen in CSS, Daarom nu uit-gecommenteerd*/}
            <h3>{dataCocktail.strDrink}</h3>

            <h4>{dataCocktail.strAlcoholic}</h4>
            <h4>{dataCocktail.strGlass}</h4>
            <div>{dataCocktail.strInstructions}</div>

            <div>{ingredientList}</div>
        </>
    );
}

export default Recipe;