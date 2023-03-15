import React, {useEffect, useState} from 'react';
import styles from "../search/Search.module.css";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";


function Search() {
    const [selectedOption, setSelectedOption] = useState("");
    const [toggleDisable, setToggleDisable] = useState(true);
    console.log("uit de search pagina " + selectedOption);

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
                              toggleDisable={toggleDisable}
                              setToggleDisable={setToggleDisable}
                    />
                    <Dropdown placeHolder="Alcoholic"
                              endpoint="a"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}
                              toggleDisable={toggleDisable}
                              setToggleDisable={setToggleDisable}
                    />
                    <Dropdown placeHolder="Category"
                              endpoint="c"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}
                              toggleDisable={toggleDisable}
                              setToggleDisable={setToggleDisable}
                    />
                    <Dropdown placeHolder="Glass type"
                              endpoint="g"
                              selectedOption={selectedOption}
                              setSelectedOption={setSelectedOption}
                              toggleDisable={toggleDisable}
                              setToggleDisable={setToggleDisable}
                    />

                </div>
            </div>

        </>
    );
}

export default Search;