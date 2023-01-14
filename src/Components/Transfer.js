import { useState, useContext } from "react"
import { ActiveUserContext } from '../ActiveUserContext'
import { AllUsersContext } from "../AllUsersContext"
import Block from "../UI/Block"

const Transfer = () => {

    const { activeUser } = useContext(ActiveUserContext)
    const [allUsers, setAllUsers] = useContext(AllUsersContext)

    const [recepientInput, setRecepientInput] = useState('')
    const [amountInput, setAmountInput] = useState('')

    const sendMoneyHandler = (e) => {
        e.preventDefault()

        setAllUsers(prevUsers => {

            const users = prevUsers.map(user => {
                if (user.login === recepientInput) {
                    const newMovs = [...user.movements]
                    newMovs.push({ amount: +amountInput, date: new Date().toISOString() })
                    return { ...user, movements: newMovs }
                }
                if (user.login === activeUser.login) {
                    const newMovs = [...user.movements]
                    newMovs.push({ amount: -amountInput, date: new Date().toISOString() })
                    return { ...user, movements: newMovs }
                }
                return user
            })
            return users;
        })

    }

    return (
        <Block additionalClasses="mb-6">
            <h1 className="text-xl">Transfer</h1>

            <form onSubmit={sendMoneyHandler}>
                <div className="flex flex-col">
                    <input type="text" onChange={e => setRecepientInput(e.target.value)} id="transferto" className="border border-black my-2 h-10 px-4 py-2 rounded-2xl" />
                    <label className="text-sm text-center" htmlFor="transferto">
                        Transfer To
                    </label>
                </div>
                <div className="flex flex-col">
                    <input type="number" onChange={e => setAmountInput(e.target.value)} id="amountToTransfer" className="border border-black my-2 h-10 px-4 py-2 rounded-2xl" />
                    <label className="text-sm text-center" htmlFor="amountToTransfer">
                        Amount
                    </label>
                </div>
                <button>Send</button>
            </form>
        </Block>
    )
}

export default Transfer;