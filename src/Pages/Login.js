import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActiveUserContext } from '../ActiveUserContext';

const Login = () => {

    const [activeUser, setActiveUser] = useContext(ActiveUserContext)

    const [users, setUsers] = useState();
    const [login, setLogin] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate()

    const getUsers = async () => {
        const response = await fetch(`https://my-json-server.typicode.com/dimianni/dummy-json/users`)
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    const checkUser = (e) => {
        e.preventDefault()

        const user = users.find(user => user.login === login)
        console.log(user);

        if(user?.pin === Number(pass)){
            navigate(`/user/${user.login}`)
            setActiveUser(user)
        } else {
            console.log('Something went wrong :(');
        }
    }

    return (
        <div className="max-w-xs mx-auto">
            <form className="flex flex-col" onSubmit={checkUser}>
                <input type="text" className="my-2 h-10 px-4 py-2 rounded-2xl" placeholder="Username" onChange={(e) => setLogin(e.target.value)} />
                <input type="password" className="my-2 h-10 px-4 py-2 rounded-2xl" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                <button>Login</button>
            </form>
        </div> 
    )
}

export default Login;