import React, { createContext } from "react";

export const Context = createContext()


const InnerContext = ({ value, children }) => {

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}

export default InnerContext;