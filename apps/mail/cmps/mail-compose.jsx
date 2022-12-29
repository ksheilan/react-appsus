const { useState, useEffect } = React
const { useNavigate, Link } = ReactRouterDOM

import { MailServices } from '../services/mail.service.js'

export function EmailCompose() {
    const [sentMail, setSentMail] = useState(MailServices.getEmptyMail())

    const navigate = useNavigate()

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setSentMail((prevMail) => ({ ...prevMail, [field]: value }))
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        MailServices.save(sentMail).then((sentMail) => {
            navigate('/mail')
        })

    }

    return <section>
        <div className="flex">
            <h2>new mail</h2>
            <Link to={'/mail'}><button>x</button></Link>

        </div>
        <form action="" onSubmit={onSaveMail} className="flexC">
            <input type="text" onChange={handleChange} name="to" value={sentMail.to} placeholder="to:" />
            <input type="text" placeholder="subject:" onChange={handleChange} name="subject" value={sentMail.subject} />
            <textarea id="body" name="body" onChange={handleChange} rows="30" />


            <button>sent</button>
        </form>
    </section>
}