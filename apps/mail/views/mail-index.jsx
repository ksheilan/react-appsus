const { Link, useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React


import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState({ from: '', isRead: '', isDelete: '' })
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    useEffect(() => {
        if (params.sent) {
            setFilterBySent()
        }
        else if (params.wereRead) {
            setFilterByOpen()
        } else if (params.delete) {
            setFilterByIsDelete()
        }
        console.log('hi from useEffect')

    }, [])

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
        MailServices.get(mailId)
            .then((mail) => {
                mail.isDelete = true
                MailServices.save(mail)
                const updatedMails = mails.filter(mail => mail.id !== mailId)
                setMails(updatedMails)
            })
    }

    function setFilterBySent() {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, from: prevFilter.from ? '' : 'user@appsus.com' }
        })
    }

    function setFilterByIsDelete() {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, isDelete: true }
        })
    }


    function setFilterByOpen() {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, isRead: true }
        })
    }

    function onMoveToPreview(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                mail.isRead = true
                MailServices.save(mail)
                navigate(`/${mailId}`)
            })
    }

    function onReadMail(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                mail.isRead = true
                MailServices.save(mail).then(() => {
                    loadEmails()
                })

            })

    }


    return <section className="mail-index full">
        <MailFilter onSetFilterBy={onSetFilterBy} />
        <section className="mail-content full">
            <MailFolderList setFilterByOpen={setFilterByOpen} setFilterBySent={setFilterBySent} />
            <MailList onMoveToPreview={onMoveToPreview} onRemoveMail={onRemoveMail} onReadMail={onReadMail} mails={mails} />
        </section>
    </section>
}

