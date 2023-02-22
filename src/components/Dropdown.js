import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from './Dropdown.modules.css';

const Dropdown = ({placeHolder, endpoint, onChange}) => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");


// useEffect zorgt voor het ophalen van lijst voor dropdown
    useEffect(() => {
        async function fetchList() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${endpoint}=list`);
                console.log(response.data.drinks);
                setOptions(response.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }
        if (endpoint) {
            fetchList();
        }
    }, [endpoint]);


    const handleSearch = () => {
        console.log("aap");
// Hier moet een doorverwijzing plaats vinden naar de waarde waar een search op gedaan word
    };

    return (
        <div className={styles.dropdownContainer}>
            <select
                placeholder={placeHolder}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option>{placeHolder}</option>
                {options.map((option) => (
                    <option
                        key={
                            option.strCategory ||
                            option.strIngredient1 ||
                            option.strAlcoholic ||
                            option.strGlass
                        }
                        value={
                            option.strCategory ||
                            option.strIngredient1 ||
                            option.strAlcoholic ||
                            option.strGlass
                        }
                    >
                        {
                            option.strCategory ||
                            option.strIngredient1 ||
                            option.strAlcoholic ||
                            option.strGlass
                        }
                    </option>
                ))}
            </select>
            <button className={styles.searchButton} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default Dropdown;