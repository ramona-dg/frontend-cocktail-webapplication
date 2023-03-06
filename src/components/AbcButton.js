import React from 'react';

//Dit is de array die wordt gebruikt om individuele buttons te maken voor elke letter
function AbcButton({setAbcLetter}) {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    return (

        // Hier wordt door de array gemapt om van elke letter inn de array een aparte button te maken in Overview.js
        abc.map((abcLetter) => {
            return (
                <button key={abcLetter}
                        onClick={() => setAbcLetter(abcLetter)}
                >{abcLetter}
                </button>
            )
        })


    );
}

export default AbcButton;