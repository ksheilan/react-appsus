const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function EmailApp() {
    const [emails, setEmails] = useState([])
    const [filterBy, setFilterBy] = useState({ from: '' })

    useEffect(() => {
        loadEmails()
    }, [])

    function loadEmails() {
        MailServices.query().then(setEmails)
    }

    return <section className="mail-index full">
        <MailFilter />
        <section className="mail-content">
            <MailFolderList />
            <MailList />


        </section>
    </section>
}

