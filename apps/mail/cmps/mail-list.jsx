
import { MailPreview } from './mail-preview.jsx'

export function MailList({ mails, onMoveToPreview, onRemoveMail, onReadMail, onStarredMail }) {

    return <section className="emails-main-area full">
        {mails.map(mail => {
            return <MailPreview key={mail.id} mail={mail}
                onMoveToPreview={onMoveToPreview}
                onReadMail={onReadMail}
                onRemoveMail={onRemoveMail}
                onStarredMail={onStarredMail} />
        })}

    </section>
}




