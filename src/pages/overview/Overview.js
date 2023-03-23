import React, {useState, useContext} from 'react';
import CocktailCard from "../../components/CocktailCard";
import AbcButton from "../../components/AbcButton";
import {AuthContext} from "../../context/AuthContext";

// Sommige letter bevatten geen cocktails, zoals de X. Ik kan hier een bericht voor weergeven.
// Dit kan door in CocktailCard.js een vergelijking met === 0 geef dan blabla weer

function Overview() {
    const { isAuth } = useContext(AuthContext);
    // is Auth is om te checken of hij ingelogd weer geeft wanneer de webadres + /search wordt ingevoerd.
    // dit is dus een fout en moet worden opgelost. Uitzoeken hoe?
    const [letter, setLetter] = useState("a");


    console.log(isAuth);
    return (
        <>
            <AbcButton setAbcLetter={setLetter}/>
            {/*    Hier worden de letter buttons gegenereerd*/}
            <CocktailCard endpoint={letter}/>
            {/*    Hier worden de beschikbare cocktails genereert en weergegeven afhankelijk van de aangegeven letter. */}
            {/*    En begint altijd bij de A, anders is er een lege pagina te zien*/}
        </>
    );
}

export default Overview;