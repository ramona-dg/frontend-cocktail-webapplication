import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";


// Recipe moet gemaakt worden vanuit search.js ( dropdown + searchbar) en vanuit overview.js (hier moet een onClick komen op de naam van de cokctail)


// useParams om dynamische url te kunnen gebruiken voor specifiek product
function Recipe(textInput) {
    const navigate = useNavigate();
    const data = navigate.location.state.data;

console.log(textInput);
    const [recipeCocktail, setRecipeCocktail] = useState();

// console.log(textInput);
//     useEffect(() => {
//         async function fetchCocktail() {
//             try {
//                 const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${textInput}`);
//                 console.log(response);
//                 setRecipeCocktail(response); // deze kan volgens mij weg?
//
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//
//         if (textInput) {
//
//             fetchCocktail();
//         }
//     }, [textInput]);




// moeten nog textInput waarde uit search zien te krijgen
    return (
        <div></div>
    );
}

export default Recipe;