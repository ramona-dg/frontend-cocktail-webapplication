import React, {useEffect, useState} from 'react';
import axios from "axios";


function CocktailCard() {
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        async function fetchCocktails() {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g');
                console.log(response.data.drinks);
                setCocktail(response.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCocktails();

    }, [])

    return (


      <section className="cocktail-card">
          {cocktail &&
              <>
                  <h2>{cocktail.strDrink}</h2>
                  <p><strong>Name: </strong>{cocktail.strDrink}</p>
                  <p><strong>Weight: </strong>{cocktail.strDrinkThumb}</p>
                  <p><strong>Alcoholic: </strong>{cocktail.strAlcoholic}</p>
              </>
          }
      </section>


    );
}

export default CocktailCard;