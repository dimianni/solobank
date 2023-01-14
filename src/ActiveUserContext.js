import { createContext, useEffect, useState, useRef, useContext } from "react";
import { AllUsersContext } from "./AllUsersContext";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = ({ children }) => {

    // const au = localStorage.getItem("savedActiveUser")

    const [allUsers, setAllUsers] = useContext(AllUsersContext)

    const [activeUserLogin, setActiveUserLogin] = useState(null)
    const [activeUser, setActiveUser] = useState(null);


    const getActiveUserData = async (receivedUserlogin) => {
        console.log(receivedUserlogin);
        console.log(allUsers);

        if (allUsers) {
            const user = await allUsers.find(user => user.login === receivedUserlogin)
            setActiveUser(user)
            localStorage.setItem("savedActiveUser", JSON.stringify(user))
        }

    }

    useEffect(() => {
        getActiveUserData(activeUserLogin)
    }, [allUsers, activeUserLogin])

    return (
        <ActiveUserContext.Provider value={{ activeUser, setActiveUser, activeUserLogin, setActiveUserLogin }}>
            {children}
        </ActiveUserContext.Provider>
    )
}