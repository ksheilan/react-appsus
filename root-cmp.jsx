const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"

import { NoteIndex } from "./apps/note/views/note-index.jsx"

import { EmailApp } from "./apps/mail/views/email-app.jsx"
import { EmailCompose } from "./apps/mail/cmps/mail-compose.jsx"
import { MailDetails } from "./apps/mail/cmps/mail-details.jsx"


export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<EmailApp />} />

                <Route element={<EmailCompose />} path="/mail/compose" />
                <Route element={<MailDetails />} path="/mail/:mailId" />

                <Route path="/mail" element={<EmailApp />} />
                <Route path="/note" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router>
}
