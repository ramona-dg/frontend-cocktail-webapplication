import React, {useEffect, useRef, useState} from "react";
import "./Dropdown.modules.css";
import axios from "axios";


const Dropdown = ({placeHolder, endpoint}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [options, setOptions] = useState(null);
    const [keyProperty, setKeyProperty] = useState(null);

    const inputRef = useRef();


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

    // useEffect zorgt voor.......
    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };


    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label;
        }
        return placeHolder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value
    };


    return (
        <div className="dropdown-container">
            <div      ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        {/*<Icon/> Inplaats van Icon een search button om te zoeken*/}
                    </div>
                </div>

            </div>
            {showMenu && (<div className="dropdown-menu">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => onItemClick(option)}
                            className={` dropdown-item ${isSelected(option) && "selected"}`}
                        >
                            {option.label}
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default Dropdown;