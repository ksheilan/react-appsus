const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"

import { NoteIndex } from "./apps/note/views/note-index.jsx"

import { UserMsg } from "./cmps/user-msg.jsx"
import { EmailCompose } from "./apps/mail/cmps/mail-compose.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"
// views
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { MailSent } from "./apps/mail/views/mail-sent.jsx"
import { MailWereRead } from "./apps/mail/views/mail-were-read.jsx"
import { MailDelete } from "./apps/mail/views/mail-delete.jsx"
import { MailStarred } from "./apps/mail/views/mail-starred.jsx"


export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route element={<MailIndex />} path="/mail" />
                {/* edit and create */}
                <Route element={<EmailCompose />} path="/mail/compose" />
                <Route element={<EmailCompose />} path="/mail/compose/:mailid" />
                {/* details */}
                <Route element={<MailDetails />} path="/:mailId" />
                {/* filters */}
                <Route element={<MailWereRead />} path="/mail/read/:wereRead" />
                <Route element={<MailSent />} path="/mail/:sent" />
                <Route element={<MailDelete />} path="/mail/delete/:delete" />
                <Route element={<MailStarred />} path="/mail/starred/:starred" />


                <Route path="/note" element={<NoteIndex />} />
            </Routes>

            <UserMsg />
        </section>
    </Router>
}
