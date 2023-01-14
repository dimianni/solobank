import React, { useEffect, useState } from 'react'

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


const CurrentBalance = ({ movements, locale }) => {

    const [balance, setbalance] = useState(0)
    const currentTime = new Intl.DateTimeFormat(locale, options).format(now)

    const accBalance = (moves) => {
        const transactionAmounts = moves.map(move =>  move.amount)
        const sum = transactionAmounts.reduce((a, b) => a + b, 0)
        setbalance(sum.toFixed(2))
    }

    useEffect(() => {
        accBalance(movements)
    }, [movements])

    return (
        <div className='flex justify-between items-center'>
            <div className="currentBalance">
                <p className='text-xl'>Current Balance</p>
                <p className='text-xs'>As of {currentTime}</p>
            </div>
            <div className="amount text-2xl">${balance}</div>
        </div>
    )
}

export default CurrentBalance;