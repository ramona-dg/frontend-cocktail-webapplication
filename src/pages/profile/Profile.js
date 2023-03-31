import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

//Profile.js moet nog helemaal gemaakt worden met de opgehaalde data vanuit de database

function Profile() {
    const { user: { email } } = useContext(AuthContext);


    return (
        <div>
       <p>Hoi {email}</p>
        </div>

    );
}

export default Profile;