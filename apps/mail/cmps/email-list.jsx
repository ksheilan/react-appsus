import { DataTable } from './data-table.jsx'
import { MailPreview } from './mail-preview.jsx'

console.log(Date.now())
export function MailList({ emails }) {

    return <section className="email-list">
        {/* <DataTable emails={emails} /> */}
        <MailPreview emails={emails} />
    </section>

}


