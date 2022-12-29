const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"

import { NoteIndex } from "./apps/note/views/note-index.jsx"

import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { EmailCompose } from "./apps/mail/cmps/mail-compose.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"
import { MailSent } from "./apps/mail/views/mail-sent.jsx"
import { MailWereRead } from "./apps/mail/views/mail-were-read.jsx"


export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route element={<MailIndex />} path="/mail" />
                <Route element={<EmailCompose />} path="/mail/compose" />
                <Route element={<MailDetails />} path="/:mailId" />
                <Route element={<MailWereRead />} path="/mail/read/:wereRead" />
                <Route element={<MailSent />} path="/mail/:sent" />


                <Route path="/note" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router>
}
