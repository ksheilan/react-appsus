import { LongTxt } from './long-txt.jsx'
import { MailStarSwitch } from './mail-star-switch-btn.jsx'

import { MailServices } from '../services/mail.service.js'

export function MailPreview({ mail, onMoveToPreview, onReadMail, onRemoveMail, onStarredMail }) {

    return <div key={mail.id} className="email flex">
        <div className="btn-box-mail-control flex">
            <input type="checkbox" onChange={() => onReadMail(mail.id)} checked={mail.isRead} />
            <button className="btn-remove-mail-control fa-regular fa-trash-can" onClick={() => onRemoveMail(mail.id)}></button>
            <MailStarSwitch mail={mail} onStarredMail={onStarredMail} />
        </div>

        <div onClick={() => onMoveToPreview(mail.id)}  className="mail-info-index flex">
            <h4>{mail.from}</h4>
            <LongTxt txt={mail.body}  length={65} />
            <p>{MailServices.getHumenDate(mail.sentAt)}</p>

        </div>
    </div>
}

