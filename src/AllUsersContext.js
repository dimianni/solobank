import { createContext, useEffect, useState } from "react";

export const AllUsersContext = createContext()

export const AllUsersProvider = ({children}) => {
    const [allUsers, setAllUsers] = useState()

    const getAllUsers = async () => {
        const response = await fetch(`https://my-json-server.typicode.com/dimianni/dummy-json/users`)
        const data = await response.json()
        setAllUsers(data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <AllUsersContext.Provider value={[allUsers, setAllUsers]}>
            {children}
        </AllUsersContext.Provider>
    ) 
}