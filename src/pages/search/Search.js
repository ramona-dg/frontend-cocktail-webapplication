import React, {useState} from 'react';
import styles from "../search/Search.module.css";
import Dropdown from "../../components/Dropdown";


function Search() {
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');


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
                    </form>
                    <br/><br/><br/>
                    {/*hier komen dropdown*/}
                    <Dropdown isSearchable placeHolder="Ingredient" endpoint="i"
                              onChange={(value) => console.log(value)}/>
                    <Dropdown isSearchable placeHolder="Alcoholic" endpoint="a"
                              onChange={(value) => console.log(value)}/>
                    <Dropdown isSearchable placeHolder="Category" endpoint="c"
                              onChange={(value) => console.log(value)}/>
                    <Dropdown isSearchable placeHolder="Glass type" endpoint="g"
                              onChange={(value) => console.log(value)}/>
                </div>
            </div>

        </>
    );
}

export default Search;