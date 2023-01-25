import React, { useState} from 'react';
import CocktailCard from "../../components/CocktailCard";
import AbcButton from "../../components/AbcButton";

function Overview() {
    const [letter, setLetter] = useState("a");
// console.log({letter});
    return (<>
       <AbcButton setAbcLetter={setLetter} />
           <CocktailCard endpoint={letter}/>
        </>
    );
}

export default Overview;