const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailIndex() {
    const [mails, setEmails] = useState([])
    const [filterBy, setFilterBy] = useState({from: '', isRead: ''})
    const navigate = useNavigate()

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    function loadEmails() {
        MailServices.query(filterBy).then(setEmails)
    }

    function onSetFilterBy(filterByFilter) {
        console.log('from index')
        setFilterBy(filterByFilter)
    }

    function onRemoveMail(mailId) {
        MailServices.remove(mailId)
            .then(() => {
                const updatedMails = mails.filter(mail => mail.id !== mailId)
                setEmails(updatedMails)
            })
    }

    function onMoveToPreview(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                mail.isRead = true
                MailServices.save(mail)
                navigate(`/mail/${mailId}`)
            })
    }


    return <section className="mail-index full">
        <MailFilter onSetFilterBy={onSetFilterBy}/>
        <section className="mail-content full">
            <MailFolderList />
            <MailList onMoveToPreview={onMoveToPreview} onRemoveMail={onRemoveMail} mails={mails} />
        </section>
    </section>
}

