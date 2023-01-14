const SingleTransaction = ({ amount, date, locale, order }) => {

    const transactionDate = new Date(date)
    const formattedDate = new Intl.DateTimeFormat(locale).format(transactionDate)

    return (
        <li className="flex justify-between items-center py-4 border-b border-gray-200">
            <div className="type flex justify-between items-center">
                <div className={"flex mr-4 p-2 rounded-2xl " + (amount > 0 ? 'bg-green-500' : 'bg-red-500')}>
                    <p>{order + 1}.&nbsp;</p>
                    <p>{amount > 0 ? 'Deposit' : 'Withdrawal'}</p>
                </div>
                <p>{formattedDate}</p>
            </div>
            <p>{amount}$</p>
        </li>
    )
}

export default SingleTransaction