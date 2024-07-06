import { useState } from "react";
import AppContext from "./appContext"

const Appprovider = props => {
    const [cart, setCart] = useState([]);
    return (
        <AppContext.Provider
            value={{ cart, setCart }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default Appprovider;