import { MailServices } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter({ onSetFilterBy }) {
    const [unRead, setUnRead] = useState([])
    const [filterBy, setFilterBy] = useState(MailServices.getDefaultFilter())

    useEffect(() => {
        onload()
        onSetFilterBy(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterBy((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
       
    }

    function onClickOnCheckBox({ target }) {
        setFilterBy((prevFilter) => {
            return { ...prevFilter, isRead: target.checked }
        })
       
    }

    function onload() {
        MailServices.query()
            .then((mails) => {
                const unReadMails = mails.filter(mail => mail.isRead !== true)
                setUnRead(unReadMails)
            })
    }

    return <section className="mail-filter flex">
        <input type="text"
            onChange={handleChange}
            name="from"
            id="from"
            placeholder="Search by name" />

        <input type="checkbox" name="isRead" onChange={(event) => onClickOnCheckBox(event)} />

        <h2>unread emails: {unRead.length}</h2>
    </section>
}

