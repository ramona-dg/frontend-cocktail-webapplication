import React, {useEffect, useState} from 'react';
import axios from "axios";
import CocktailCard from "../../components/CocktailCard";
import {Link} from "react-router-dom";

function Overview() {
    const [cocktails, setCocktails] = useState([]);
    const [endpoint, setEndpoint] = useState("a")
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);


    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            try {
                const data = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${endpoint}`);
                console.log(data.data)
                setCocktails(data.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();
    }, [endpoint]);


    return (<>
            <button
            onClick={() => setEndpoint("a")}
            ><Link>A</Link></button>
            <button
                onClick={() => setEndpoint("b")}
            ><Link>B</Link></button>
            <button
                onClick={() => setEndpoint("c")}
            ><Link>C</Link>
            </button>




            <div className="cocktail-deck">
                {cocktails &&
                    <>
                        {cocktails.drinks && cocktails.drinks.map((cocktail) => {
                            return <CocktailCard key={cocktail.idDrink} endpoint={cocktail.url}/>
                        })}
                    </>
                }
                {loading && <p>Loading...</p>}
                {error && <p>Er ging iets mis bij het ophalen van de data...</p>}
            </div>
        </>
    );
}

export default Overview;