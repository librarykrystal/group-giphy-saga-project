import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Favorite(){
    const dispatch = useDispatch();
    const history = useHistory();

    return(
        <>
        <h1>Favorites</h1>
        </>
    )
}

export default Favorite;