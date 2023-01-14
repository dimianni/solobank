import React from 'react'
import Block from '../UI/Block';
import SingleTransaction from './SingleTransaction';

const Transactions = ({ movements, locale }) => {

    const reversed = [...movements].reverse()

    return (
        <Block additionalClasses="max-h-96 overflow-y-scroll">
            <ul>
                {reversed.map((transaction, i) => {
                    return (
                        <SingleTransaction key={i} order={i} locale={locale} amount={transaction.amount} date={transaction.date} />
                    )
                })}
            </ul>
        </Block>
             
    )
}

export default Transactions;