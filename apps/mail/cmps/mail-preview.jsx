import { LongTxt } from './long-txt.jsx'
import { MailServices } from '../services/mail.service.js'

export function MailPreview({ mail, onMoveToPreview, onReadMail, onRemoveMail }) {

    return <div key={mail.id} className="email flex">
        <input type="checkbox" onChange={() => onReadMail(mail.id)} checked={mail.isRead} />
        <button className="fa-regular fa-trash-can" onClick={() => onRemoveMail(mail.id)}></button>
        <button className="fa-regular fa-star"></button>

        <div onClick={() => onMoveToPreview(mail.id)} className="mail-info-index flex">
            <h4>{mail.from}</h4>
            <LongTxt txt={mail.body} length={65} />
            <p>{MailServices.getHumenDate(mail.sentAt)}</p>

        </div>
    </div>
}

