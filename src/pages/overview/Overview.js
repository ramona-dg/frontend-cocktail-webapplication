import React, {useEffect, useState} from 'react';
import axios from "axios";
import CocktailCard from "../../components/CocktailCard";

function Overview() {
    const [letter, setLetter] = useState("a");
// console.log({letter});
    return (<>
            <button
                onClick={() => setLetter("a")}
                // onChange={(event) => setLetter(event.target.value)}
            >A
            </button>

            <button
                onClick={() => setLetter("b")}
                // onChange={(event) => setLetter(event.target.value)}
            >B
            </button>
            <button
                onClick={() => setLetter("c")}
                // onChange={(event) => setLetter(event.target.value)}
            >C
            </button>
{/*// button component maken!*/}


            <CocktailCard endpoint={letter}/>

        </>
    );
}

export default Overview;