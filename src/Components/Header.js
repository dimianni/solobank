import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ActiveUserContext } from '../ActiveUserContext';

const Header = () => {

    const {activeUser, setActiveUser} = useContext(ActiveUserContext)
    const navigate = useNavigate()

    const handleExit = () => {
        navigate('/')
        localStorage.removeItem('savedActiveUser')
        setActiveUser(null)
    }

    return (
        <header className='bg-white h-20 flex items-center mb-5'>
            <div className="relative container flex justify-between items-center">
                {activeUser ? <h2>Welcome, {activeUser.owner}!</h2> : ''}
                <h1 className='text-3xl absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'><b>solobank</b></h1>
                {activeUser ? <button onClick={handleExit}>Exit</button> : ''}
            </div>
        </header>
    )
}

export default Header;