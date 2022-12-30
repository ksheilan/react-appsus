const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { MailServices } from '../services/mail.service.js'
import { MailFolderList } from './mail-folder-list.jsx'

export function EmailCompose() {
    const [sentMail, setSentMail] = useState(MailServices.getEmptyMail())

    const navigate = useNavigate()
    const { mailid } = useParams()
    console.log(mailid)

    useEffect(() => {
        if (!mailid) return
        loadMail()
    }, [])


    function loadMail() {
        MailServices.get(mailid).then(setSentMail)
    }


    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setSentMail((prevMail) => ({ ...prevMail, [field]: value }))
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        MailServices.save(sentMail).then(() => { navigate('/mail') })
    }

    return <section className="flex full">
        <MailFolderList />
        <div className="mail-compose-area flexC">
            <div className="btn-box-mail-compose flex">
                <h2>new mail</h2>
                <Link to={'/mail'}><button>Go Back</button></Link>

            </div>
            <form onSubmit={onSaveMail} className="flexC">
                <input type="text"
                    onChange={handleChange}
                    name="to"
                    value={sentMail.to}
                    placeholder="to:" />
                <input type="text"
                    placeholder="subject:"
                    onChange={handleChange}
                    name="subject"
                    value={sentMail.subject} />
                <textarea id="body"
                    name="body"
                    onChange={handleChange}
                    value={sentMail.body}
                    rows="25" />


                <button>sent</button>
            </form>
        </div>
    </section>
}