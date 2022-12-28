const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

import { MailServices } from "../services/mail.service.js"
import { MailFolderList } from "./mail-folder-list.jsx"
import { MailFilter } from "./mail-filter.jsx"

export function MailDetails() {
    const { mailId } = useParams()
    const [mail, setMail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        MailServices.get(mailId)
            .then(setMail)
            .catch((err) => { console.log(err); onGoBack })
    }

    function onGoBack() {
        navigate('/mail')
    }

    console.log(mail)
    if (!mail) return <h2>loading</h2>
    return <section className="mail-details full">
        <MailFilter />
        <section className="mail-content">
            <MailFolderList />
            <div className="mail-info flex">
                <h1>{mail.subject}</h1>
                <div className="mail-info-head flex">
                    <h2>From: {mail.from}</h2>
                    <button className="fa-regular fa-star"></button>
                </div>
                <p>{mail.body}</p>





            </div>


        </section>
    </section>
}