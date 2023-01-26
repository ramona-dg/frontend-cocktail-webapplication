import React, {useState} from 'react';
import styles from "../search/Search.module.css";
import {Link} from "react-router-dom";

function Search() {
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [category, setCategory] = useState('');
    const [glass, setGlass] = useState('');


    return (
        <>
            <div className={styles.contentContainer}>
                <div className={`${styles['contentContainer__photo']} ${styles.contentItem}`}/>

                <div className={`${styles['contentContainer__form']} ${styles.contentItem}`}>
                    <h1>Search</h1>
                    <form>
                        <label htmlFor="name-field">
                            <br/>
                            <input
                                name="name"
                                placeholder={"Cocktail name"}
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </label>
                        <br/>
                        <label htmlFor="ingredient-field">
                            <br/>
                            <input
                                name="ingredient"
                                placeholder={"Ingredient type"}
                                type="text"
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                            />
                        </label>
                        <br/>
                        <br/>
                    </form>
            {/*hier komen dropdown*/}

                </div>
            </div>

        </>
    );
}

export default Search;