const { Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React


import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState({ from: '', isRead: false })
    const navigate = useNavigate()

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    function loadEmails() {
        MailServices.query(filterBy).then(setMails)
    }

    function onSetFilterBy(filterByFilter) {
        setFilterBy(filterByFilter)
    }

    function onRemoveMail(mailId) {
        MailServices.remove(mailId)
            .then(() => {
                const updatedMails = mails.filter(mail => mail.id !== mailId)
                setMails(updatedMails)
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

    function onReadMail(mailId) {
        console.log('.')
        // MailServices.get(mailId)
        //     .then((mail) => {
        //         mail.isRead = true
        //         MailServices.save(mail)
        //         const updatedMails = mails.filter(mail => mail.isRead === false)
        //         return setMails(updatedMails)
        //     })

    }


    return <section className="mail-index full">
        <MailFilter onSetFilterBy={onSetFilterBy} />
        <section className="mail-content full">
            <MailFolderList />
            <MailList onMoveToPreview={onMoveToPreview} onRemoveMail={onRemoveMail} onReadMail={onReadMail} mails={mails} />
        </section>
    </section>
}

