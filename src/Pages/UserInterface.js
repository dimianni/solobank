import React, { useContext } from 'react';
import { ActiveUserContext } from '../ActiveUserContext';
import CurrentBalance from '../Components/CurrentBalance';
import Loan from '../Components/Loan';
import Transactions from '../Components/Transactions';
import Transfer from '../Components/Transfer';
import Spinner from '../UI/Spinner';

const UserInterface = () => {


    const [activeUser, setActiveUser] = useContext(ActiveUserContext)

    let ui = <Spinner />

    // console.log(activeUser);

    if (JSON.stringify(activeUser) !== '{}') {
        ui = (<div className='flex flex-col'>
            <div className="ui-top">
                <CurrentBalance />
            </div>
            <div className="ui-bottom flex justify-between items-start">
                <div className="ui-bottom_left w-6/12">
                    <Transactions />
                </div>
                <div className="ui-bottom_right w-2/5">
                    <Transfer />
                    <Loan />
                </div>
            </div>
        </div>)
    } 

    return (
        <div>
            {ui}
        </div>
    )
}

export default UserInterface;