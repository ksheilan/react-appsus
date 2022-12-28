const { useState, useEffect } = React
const { Link, useNavigate } = ReactRouterDOM
import { MailServices } from '../services/mail.service.js'

export function MailPreview() {
    const navigate = useNavigate()
    const [mails, setEmails] = useState([])

    useEffect(() => {
        loadEmails()
    }, [])

    function loadEmails() {
        MailServices.query().then(setEmails)
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

    return <section className="emails-main-area">
        {mails.map(email => {
            return <div key={email.id} className="email flex">
                {email.isRead && <input type="checkbox" defaultChecked />}
                {!email.isRead && <input type="checkbox" />}
                <button className="fa-regular fa-trash-can" onClick={() => onRemoveMail(email.id)}></button>

                <div onClick={() => onMoveToPreview(email.id)} className="email flex">
                    <button className="fa-regular fa-star"></button>
                    <h4>{email.to}</h4>
                    <p>{email.body}</p>
                    <p>{MailServices.getHumenDate(email.sentAt)}</p>

                </div>
            </div>
        })}
    </section>
}