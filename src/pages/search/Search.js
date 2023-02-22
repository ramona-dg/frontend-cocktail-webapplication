import React, {useState} from 'react';
import styles from "../search/Search.module.css";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";


function Search() {


    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}/>
                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>

                    <SearchBar />
                    <Dropdown placeHolder="Ingredient"
                              endpoint="i"
                    />
                    <Dropdown placeHolder="Alcoholic"
                              endpoint="a"
                    />
                    <Dropdown placeHolder="Category"
                              endpoint="c"
                    />
                    <Dropdown placeHolder="Glass type"
                              endpoint="g"
                    />

                </div>
            </div>

        </>
    );
}

export default Search;