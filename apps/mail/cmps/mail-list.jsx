import { MailPreview } from './mail-preview.jsx'

// console.log(Date.now())
export function MailList({ emails }) {

    return <section className="email-list">
        <MailPreview emails={emails} />
    </section>

}


