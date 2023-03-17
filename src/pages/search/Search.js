import React, {useEffect, useState} from 'react';
import styles from "../search/Search.module.css";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";


function Search() {
    const [selectedOption, setSelectedOption] = useState("");
    console.log("uit de search pagina " + selectedOption);

    const handleSearch = () => {
        console.log("aap");
// Hier moet een doorverwijzing plaats vinden naar de waardes waar een search op gedaan wordt. Een overview van gevonden resultaten naar aanleiding van de search
    };

    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}/>
                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>

                    <SearchBar/>
                    <Dropdown placeHolder="Ingredient"
                              endpoint="i"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}


                    />
                    <Dropdown placeHolder="Alcoholic"
                              endpoint="a"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}


                    />
                    <Dropdown placeHolder="Category"
                              endpoint="c"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}



                    />
                    <Dropdown placeHolder="Glass type"
                              endpoint="g"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption }


                    />
                    <button className={styles.searchButton}
                            disabled={!selectedOption}
                            onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

            </div>

        </>
    );
}

export default Search;