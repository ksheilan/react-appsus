const { useNavigate, useParams } = ReactRouterDOM
const { useState, useEffect } = React

import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailSorter } from '../cmps/mail-sorter.jsx'

import { MailServices } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'


export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState(MailServices.getDefaultFilter())
    // const [sortBy, setSortBy] = useState({ from: '', sentAt: '' })
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        setFilterBySwitch()
    }, [])

    useEffect(() => {
        loadEmails()
    }, [filterBy])

    function loadEmails() {
        MailServices.query(filterBy).then(setMails)
    }

    function setFilterBySwitch() {
        if (params.sent) {
            setFilterBySent()
            showSuccessMsg('Emails sent')
        }
        else if (params.wereRead) {
            setFilterByOpen()
            showSuccessMsg('You allready read them')
        }
        else if (params.delete) {
            setFilterByIsDelete()
            showSuccessMsg('here when you click delete the email will rly delete')
        }
        else if (params.starred) {
            setFilterByStarred()
            showSuccessMsg('the starred ones')
        }
        else if (params.draft) {
            setFilterByDraft()
            showSuccessMsg('the draft ones')

        }
        else if (params.treatment) {
            setFilterBytreatment()
            showSuccessMsg('the Furter Treatment')

        }
    }

    function onSetFilterBy(filterByFilter) {
        setFilterBy(filterByFilter)
    }

    function setFilterBySent() {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, from: prevFilter.from ? '' : 'user@appsus.com', isDraft: false }
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

    function setFilterByStarred() {
        setFilterBy(() => {
            let prevFilter = MailServices.getDefaultFilter()
            return { ...prevFilter, isStarred: true }
        })
    }

    function setFilterByDraft() {
        setFilterBy(() => {
            let prevFilter = MailServices.getDefaultFilter()
            return { ...prevFilter, isDraft: true }
        })
    }

    function setFilterBytreatment() {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, furterTreatment: true }
        })
    }

    function onSetSortBy(sortBy) {
        if (sortBy.sentAt) {
            mails.sort((c1, c2) => (c1.sentAt - c2.sentAt) * mails.sentAt)
        } else if (sortBy.from) {
            mails.sort((c1, c2) => c1.from.localeCompare(c2.from) * mails.from)
        }
    }

    function onStarredMail(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                mail.isStarred = !mail.isStarred
                MailServices.save(mail).then(() => { loadEmails() })
            })
    }

    function onRemoveMail(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                if (!mail.isDelete) {
                    mail.isDelete = true
                    MailServices.save(mail)
                    const updatedMails = mails.filter(mail => mail.id !== mailId)
                    setMails(updatedMails)

                } else {
                    MailServices.remove(mailId).then(() => {
                        const updatedMails = mails.filter(mail => mail.id !== mailId)
                        setMails(updatedMails)
                    })
                }
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
                mail.isRead = !mail.isRead
                MailServices.save(mail).then(() => { loadEmails() })
            })
    }


    return <div className="mail-index full">
        <section className="flex">
            <MailFilter onSetFilterBy={onSetFilterBy} />
            {/* <MailSorter onSetSortBy={onSetSortBy} /> */}
        </section>
        <section className="mail-content">
            <MailFolderList />
            <MailList
                mails={mails}
                onMoveToPreview={onMoveToPreview}
                onRemoveMail={onRemoveMail}
                onReadMail={onReadMail}
                onStarredMail={onStarredMail} />
        </section>
    </div>
}

