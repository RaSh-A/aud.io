import { useContext } from "react"

import { AudContext } from "../context/AudContext"
import { Header } from "../components/Header"

export const Account = () => {
    const { state } = useContext(AudContext)
    // console.log(state.user.foundUser);
    const { firstName, lastName, email } = state.user.foundUser
    return <>
        <Header />
        <div>
            <h1>{firstName} {lastName}</h1>
            <h3>{email}</h3>
        </div></>
}