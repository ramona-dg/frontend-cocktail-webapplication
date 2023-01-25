import React from 'react';

function AbcButton({setAbcLetter}) {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return (

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