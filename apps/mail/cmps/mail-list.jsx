
import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onMoveToPreview, onRemoveMail }) {

    return <section className="emails-main-area full">
        {mails.map(mail => {
            return <MailPreview key={mail.id} mail={mail} onMoveToPreview={onMoveToPreview} onRemoveMail={onRemoveMail} />
        })}

    </section>
}




