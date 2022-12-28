const { Link, useNavigate } = ReactRouterDOM

import { MailServices } from '../services/mail.service.js'

export function MailPreview({ emails }) {
    const navigate = useNavigate()

    
    function onMoveToPreview(mailId) {
        navigate(`/mail/${mailId}`)
    }

    return <section className="emails-main-area">
        {emails.map(email => {
            return <div key={email.id} onClick={() => onMoveToPreview(email.id)} className="email flex">
                <input type="chackbox" />
                <button className="fa-regular fa-star"></button>
                <h4>{email.to}</h4>
                <p>{email.body}</p>
                <p>{MailServices.getHumenDate(email.sentAt)}</p>
            </div>
        })}
    </section>
}