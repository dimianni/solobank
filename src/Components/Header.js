import React, { useContext } from 'react'
import { ActiveUserContext } from '../ActiveUserContext';

const Header = () => {

    const [activeUser, setActiveUser] = useContext(ActiveUserContext)

    return (
        <header className='bg-white h-20 flex items-center mb-5'>
            <div className="container flex justify-between items-center">
                <h2>Welcome, {activeUser.owner}!</h2>
                <h1><b>solobank</b></h1>
                <button>Exit</button>
            </div>
        </header>
    )
}

export default Header;