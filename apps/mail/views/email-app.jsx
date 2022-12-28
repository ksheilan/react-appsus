const { Link, useNavigate } = ReactRouterDOM



import {}
import { EmailFolderList } from '../cmps/email-folder-list.jsx'
import { EmailFilter } from '../cmps/mail-filter.jsx'

export function EmailApp() {
    return <section className="mail-index">
        <EmailFilter />
        <section className="mail-content">
        <EmailFolderList />



        </section>
    </section>
}

