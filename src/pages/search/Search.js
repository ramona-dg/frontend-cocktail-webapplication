import React, {useState} from 'react';
import styles from "../search/Search.module.css";
import Dropdown from "../../components/Dropdown";

function Search() {
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    // const [alcohol, setAlcohol] = useState('');
    // const [category, setCategory] = useState('');
    // const [glass, setGlass] = useState('');

    // dit moet straks verplaats en omgebouwd worden tot category, glass type, alcohol
    const options = [
        { value: "green", label: "Green"},
        { value: "yellow", label: "Yellow"},
        { value: "red", label: "red"},
        { value: "blue", label: "Blue"},

        {},

    ]


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
                    <br/><br/><br/>
                    {/*hier komen dropdown*/}
                    <Dropdown isSearchable placeHolder="Alcoholic" options={options}  onChange={(value) => console.log(value)}/>
                    <Dropdown isSearchable placeHolder="Category" options={options}  onChange={(value) => console.log(value)}/>
                    <Dropdown isSearchable placeHolder="Glass type" options={options}  onChange={(value) => console.log(value)}/>
                </div>
            </div>

        </>
    );
}

export default Search;