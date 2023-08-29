// import React from "react";
import React, { useState } from "react";

import FavContext from "./favContext";

const FavState = (props) => {

    const [fav,setFav]=useState([]);
    const [info, setInfo] = useState([]);

    return (
        <FavContext.Provider value={{fav,setFav,info,setInfo}}>
            {props.children }
        </FavContext.Provider>
    )
}

export default FavState