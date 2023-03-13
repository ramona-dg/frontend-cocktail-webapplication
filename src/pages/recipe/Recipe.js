import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";


// Recipe moet gemaakt worden vanuit search.js ( dropdown + searchbar) en vanuit overview.js (hier moet een onClick komen op de naam van de cokctail)


// useParams om dynamische url te kunnen gebruiken voor specifiek product, Is dit nodig?
function Recipe() {
    const location = useLocation();
    const {textInput} = location.state || {}; // Dit lege object zorgt ervoor dat er geen crash ontstaat als de location.state leeg is of undefined. Zou kunnen afhandelen om de button disabled te maken in searchBar.js maar dan moet er ook voor gezorgd worden dat de state niet null of undefined is ipv alleen leeg.

    console.log(textInput);
    const [dataCocktail, setDataCocktail] = useState({});
    const [ingredients, setIngredients] = useState([]);

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
            {/*<img  src={dataCocktail.strDrinkThumb} alt="Cocktail Image" /> // Afbeelding te groot aanpassen in CSS, Daarom nu gecommenteerd*/}
            <h3>{dataCocktail.strDrink}</h3>

            <h4>{dataCocktail.strAlcoholic}</h4>
            <h4>{dataCocktail.strGlass}</h4>
            <div>{dataCocktail.strInstructions}</div>

            <div>{ingredientList}</div>
        </>
    );
}

export default Recipe;