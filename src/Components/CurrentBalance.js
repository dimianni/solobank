import React, { useContext, useEffect, useState } from 'react'
import { ActiveUserContext } from '../ActiveUserContext';


// Current date and time
const now = new Date()

/*--------------------------------------------*/
/* New Way (with internationalization and Intl API)
----------------------------------------------*/
const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
}


const CurrentBalance = () => {

    const [activeUser, setActiveUser] = useContext(ActiveUserContext)

    const [balance, setbalance] = useState(0)

    const currentTime = new Intl.DateTimeFormat(activeUser.locale, options).format(now)

    const accBalance = (acc) => {
        // Originally acc is an empty object, that is why we need to do a check 
        if (JSON.stringify(acc) !== '{}'){
            const sum = acc.movements.reduce((a, b) => a + b, 0)
            setbalance(sum.toFixed(2))
        } 
    }

    useEffect(() => {
        accBalance(activeUser)
    }, [activeUser])

    // const curBal = 'Loading...'

    // if (JSON.stringify(activeUser) != '{}'){
    //     curBal = ``
    // }

    return(
        <div className='flex justify-between items-center'>
            <div className="currentBalance">
                <p>Current Balance</p>
                <p>As of {currentTime}</p>
            </div>
            <div className="amount">${balance}</div>
        </div>
    )
}

export default CurrentBalance;