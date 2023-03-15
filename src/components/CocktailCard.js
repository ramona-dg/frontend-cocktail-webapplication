import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


function CocktailCard({ endpoint }) {
    const [cocktails, setCocktails] = useState([]);



    useEffect(() => {
        async function fetchCocktails() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${endpoint}`);
                setCocktails(response.data.drinks);

            } catch (error) {
                console.error(error);
            }
        }

        if (endpoint) {
            fetchCocktails();
        }

    }, [endpoint]);



    return (
        <section className="cocktail-card">
            {cocktails && cocktails.map((cocktail) => {
                return (
                    <div key={cocktail.idDrink}>
                        ID: {cocktail.idDrink}
                        <br/>
                        Name: <Link to="/recipe" state={{name: cocktail.strDrink}} >{cocktail.strDrink}</Link>
                        <br/>
                        Alcoholic: {cocktail.strAlcoholic}
                        <br/>
                        <br/>
                    </div>

                )
            })}

        </section>
    );
}

export default CocktailCard;