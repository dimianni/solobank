import { createContext, useEffect, useState } from "react";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = ({ children }) => {

    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        console.log(activeUser);
    }, [activeUser])

    return(
        <ActiveUserContext.Provider value={[activeUser, setActiveUser]}>
            {children}
        </ActiveUserContext.Provider>
    )
}