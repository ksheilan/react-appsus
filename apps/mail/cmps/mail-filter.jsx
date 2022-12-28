import { MailServices } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter() {
    const [unRead, setUnRead] = useState([])

    useEffect(() => {
        onload()
    }, [])

    function onload() {
        MailServices.query()
            .then((mails) => {
                const unReadMails = mails.filter(mail => mail.isRead !== true)
                setUnRead(unReadMails)
            })
    }

    console.log(unRead)
    return <section className="mail-filter flex">
        <input type="text" name="" id="" />
        <h2>unread emails: {unRead.length}</h2>
    </section>
}