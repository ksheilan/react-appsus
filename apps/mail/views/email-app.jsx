const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from '../cmps/email-folder-list.jsx'
import { EmailFilter } from '../cmps/mail-filter.jsx'
import { MailList } from '../cmps/email-list.jsx'

export function EmailApp() {
    const [emails, setEmails] = useState([])
    const [filterBy, setFilterBy] = useState({ txt: '', minPrice: '' })

    useEffect(() => {
        loadEmails()
    }, [])

    function loadEmails() {
        MailServices.query().then(setEmails)
    }

    console.log(emails)
    return <section className="mail-index full">
        <EmailFilter />
        <section className="mail-content">
            <MailFolderList />
            <MailList emails={emails} />


        </section>
    </section>
}

